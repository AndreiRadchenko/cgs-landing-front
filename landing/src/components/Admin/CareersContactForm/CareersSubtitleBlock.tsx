import dynamic from "next/dynamic";

const CareersTitleTextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
    ssr: false,
});

export const CareersSubtitleBlock = () => { 
    return (
        <div style={{ marginBottom: "50px" }}>
            <CareersTitleTextEditor header="Title" name="subtitle2" />
        </div>
    );
};

export default CareersSubtitleBlock;