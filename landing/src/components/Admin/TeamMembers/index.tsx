import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { queryKeys } from "../../../consts/queryKeys";
import { IServiceMobile, ITeamMembers } from "../../../types/Admin/Response.types";
import { adminTeamMembers } from "../../../services/adminTeamMembers";
import * as Styled from "../../../styles/adminTeamMembers";
import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import { Formik, useFormikContext } from "formik";
import Arrow from "../../../../public/upArrowSidebar.svg";
import TrashIcon from "../../../components/Admin/Portfolio/TrashIcon";
import { AdminShowCaseServiceButton } from "../../../styles/AdminPage";

interface ITeamMembersProps {
    data: ITeamMembers | undefined;
    refetch: () => Promise<ITeamMembersProps>;
}

const TeamMembers = () => {
    const { values, handleChange, setValues } = useFormikContext<IServiceMobile>();
    const [newMember, setNewMember] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const { data, refetch }: ITeamMembersProps = useQuery(
        [queryKeys.GetTeamMembers],
        () => adminTeamMembers.getTeamMembers()
    );

    useEffect(() => {
        if (!data) return;

        setValues({
            ...values,
            teamMembersBlock: {
                title: data.title,
                description: data.description,
                members: data.members,
                selectedMembers: data.selectedMembers
            }
        })
    }, [data]);

    const { mutateAsync } = useMutation(
        [queryKeys.UpdateTeamMembers],
        (data: ITeamMembers) => adminTeamMembers.updateTeamMembers(data)
    );

    const submitForm = async () => {
        document.body.style.cursor = "wait";
        if (!data) return;

        const updatedData: ITeamMembers = {
            ...data,
            title: values.teamMembersBlock.title,
            description: values.teamMembersBlock.description,
            members: values.teamMembersBlock.members,
            selectedMembers: values.teamMembersBlock.selectedMembers,
        };

        await mutateAsync(updatedData);
        await refetch();
        document.body.style.cursor = "auto";
    };

    const selectMember = (id: string | undefined) => {
        const selectedMember = values.teamMembersBlock.members.find(member => member.id === id);

        if (selectedMember) {
            const selectedMembers = [...values.teamMembersBlock.selectedMembers, selectedMember];

            setValues({
                ...values,
                teamMembersBlock: {
                    ...values.teamMembersBlock,
                    selectedMembers: selectedMembers,
                },
            });
        };
    };

    const addMember = () => {
        if (newMember.trim() === "") {
            return;
        }
        const memberId = `${Math.random() * 1000000}`;
        const updatedMembers = [
            ...values.teamMembersBlock.members,
            {
                id: memberId,
                member: newMember,
            },
        ];
        handleChange({
            target: {
                name: "teamMembersBlock.members",
                value: updatedMembers,
            },
        });
        setNewMember("");
    };

    const deleteSelectedMember = (index: number) => {
        const updatedSelectedMembers = values.teamMembersBlock.selectedMembers.filter((_, i) => i !== index);
        handleChange({
            target: {
                name: "teamMembersBlock.selectedMembers",
                value: updatedSelectedMembers,
            },
        });
    };
    
    const deleteMember = (index: number) => {
        const updatedMembers = values.teamMembersBlock.members.filter((_, i) => i !== index);
        handleChange({
            target: {
                name: "teamMembersBlock.members",
                value: updatedMembers,
            },
        });
    };

    if (!data) return null;

    return (
        <Formik initialValues={data} onSubmit={() => submitForm()}>
            {() => {
                return (
                    <AdminBlockDropDown title="TEAM MEMBERS">
                        <Styled.Wrapper>
                            <Styled.TextBlock>
                                <Styled.Subtitle>Subtitle</Styled.Subtitle>
                                <Styled.TitleInput
                                    name="teamMembersBlock.title"
                                    value={values.teamMembersBlock.title}
                                    onChange={handleChange}
                                />
                                <Styled.Description>Text</Styled.Description>
                                <Styled.TitleInput
                                    name="teamMembersBlock.description"
                                    value={values.teamMembersBlock.description}
                                    onChange={handleChange}
                                />
                            </Styled.TextBlock>
                            <Styled.MembersBlock>
                                <Styled.AddMembers>
                                    <Styled.MembersInput
                                        placeholder="Add NEW member"
                                        value={newMember}
                                        onChange={(e) => setNewMember(e.target.value)}
                                    />
                                    <Styled.AddMembersButton onClick={addMember}>+</Styled.AddMembersButton>
                                </Styled.AddMembers>
                                <Styled.MembersDropdown>
                                    <Styled.DropdownButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                                            // Choose one member
                                        <img width={9} height={5} src={Arrow.src} alt="Arrow" />
                                    </Styled.DropdownButton>
                                    <Styled.DropdownContent isOpen={isOpen}>
                                        {values.teamMembersBlock.members?.map((member, index) => (
                                            <div key={member.id} onClick={() => selectMember(member.id)}>
                                                <p>{member.member}</p>
                                                <Styled.DeleteMember onClick={(e) => {
                                                    e.stopPropagation()
                                                    deleteMember(index)
                                                }}>
                                                    <TrashIcon />
                                                </Styled.DeleteMember>
                                            </div>
                                        ))}
                                    </Styled.DropdownContent>
                                    <Styled.SelectedContent isOpen={isOpen}>
                                        {values.teamMembersBlock.selectedMembers?.map((member, index) => (
                                            <AdminShowCaseServiceButton 
                                                key={index} 
                                                onClick={() => deleteSelectedMember(index)}
                                            >
                                                {member.member} <span>x</span>               
                                            </AdminShowCaseServiceButton>
                                        ))}
                                    </Styled.SelectedContent>
                                </Styled.MembersDropdown>
                            </Styled.MembersBlock>
                        </Styled.Wrapper>
                        <Styled.SubmitButton type="submit" onClick={() => submitForm()}>Save Changes</Styled.SubmitButton>
                    </AdminBlockDropDown>
                )
            }}
        </Formik>
    );
};

export default TeamMembers;