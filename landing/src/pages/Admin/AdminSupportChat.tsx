import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import {
  useMultiChatLogic,
  MultiChatWindow,
  MultiChatSocket,
} from "react-chat-engine-advanced";
import { sendMessage } from "react-chat-engine";
import SunEditorCore from "suneditor/src/lib/core";
import { Field, FieldProps, Formik } from "formik";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

import * as Styled from "../../styles/AdminSupportChat.styled";
import "suneditor/dist/css/suneditor.min.css";

import { options } from "../../consts";

const BTN_STYLES = {
  background: "#5869DD",
  padding: "10px",
  color: "#FFF",
  borderRadius: "10px",
};

const AdminSupportChat = () => {
  const [showChat, setShowChat] = useState<boolean>(false);
  const [file, setFile] = useState<File[] | FileList | null>(null);

  const editorRef = useRef<SunEditorCore>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const chatProps = useMultiChatLogic(
    String(process.env.NEXT_PUBLIC_PROJECT_ID),
    String(process.env.NEXT_PUBLIC_CHAT_ADMIN),
    "ELdBC4fEy@VYi"
  );

  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editorRef.current = sunEditor;
  };

  const handleImageUploadBefore = (
    files: File[],
    _info: object,
    uploadHandler: Function
  ) => {
    setFile(files);

    uploadHandler(files);
  };

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  }, []);

  if (!showChat) return <div />;

  return (
    <Styled.SupportWrapper style={{ fontFamily: "Gilroy" }}>
      <MultiChatWindow
        renderMessageForm={() => (
          <Formik
            key="chatAdminFormik"
            initialValues={{ adminMsg: "" }}
            onSubmit={(values, { setValues }) => {
              if (!file && editorRef.current?.getText()) {
                sendMessage(
                  {
                    publicKey: chatProps.projectId,
                    userName: chatProps.username,
                    userSecret: chatProps.secret,
                  },
                  chatProps.chat?.id,
                  {
                    text: values.adminMsg,
                    files: file,
                    sender_username: chatProps.username,
                  }
                );
                setValues({ adminMsg: "" });
              }

              if (file) {
                sendMessage(
                  {
                    publicKey: chatProps.projectId,
                    userName: chatProps.username,
                    userSecret: chatProps.secret,
                  },
                  chatProps.chat?.id,
                  {
                    text: values.adminMsg,
                    files: file,
                    sender_username: chatProps.username,
                  }
                );
                setValues({ adminMsg: "" });
                setFile(null);
              }
            }}
          >
            {(props) => (
              <form
                style={{
                  width: "49.8%",
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  position: "fixed",
                  bottom: "0",
                  background: "#FFF",
                }}
                onSubmit={props.handleSubmit}
              >
                <Field name={"adminMsg"}>
                  {({ field }: FieldProps) => (
                    <SunEditor
                      name={field.name}
                      defaultValue={field.value}
                      setContents={field.value}
                      onChange={field.onChange(field.name)}
                      getSunEditorInstance={getSunEditorInstance}
                      onImageUploadBefore={handleImageUploadBefore}
                      setOptions={{
                        ...options,
                        buttonList: [
                          ["font", "fontSize"],
                          [
                            "bold",
                            "underline",
                            "italic",
                            "strike",
                            "subscript",
                            "superscript",
                          ],
                          ["removeFormat"],
                          ["list"],
                          ["link", "image", "video"],
                        ],
                      }}
                      lang="en"
                    />
                  )}
                </Field>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <button style={BTN_STYLES} type={"submit"}>
                    Send
                  </button>
                  <label htmlFor="file" style={{ textAlign: "center" }}>
                    {!file ? "Click to upload text file" : file[0].name}
                  </label>
                  <input
                    ref={inputRef}
                    type="file"
                    id="file"
                    name="file"
                    style={{
                      display: "none",
                    }}
                    onChange={(e) => setFile(e.target.files)}
                  />
                  {file && (
                    <button
                      style={BTN_STYLES}
                      onClick={() => {
                        setFile(null);
                        if (inputRef.current) {
                          inputRef.current.value = "";
                        }
                      }}
                    >
                      Clear file
                    </button>
                  )}
                </div>
              </form>
            )}
          </Formik>
        )}
        renderChatHeader={(props) => (
          <Styled.SupportChatHeaderWrapper>
            <Styled.SupportChatHeader>
              {chatProps.chat?.admin.username}|
              {chatProps.chat?.admin.first_name}
            </Styled.SupportChatHeader>
            <Styled.SupportChatDesc>{props.description}</Styled.SupportChatDesc>
          </Styled.SupportChatHeaderWrapper>
        )}
        {...chatProps}
        style={{ height: "100vh" }}
      />
      <MultiChatSocket {...chatProps} />
    </Styled.SupportWrapper>
  );
};

export default AdminSupportChat;
