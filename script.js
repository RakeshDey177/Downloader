const saveButton= document.getElementsByClassName("save-btn")[0];
const textarea = document.querySelector("textarea");
const filename= document.querySelector(".file-name input");
const saveas =document.querySelector(".save-as #save");

saveButton.addEventListener("click",()=>{
    // console.log(textarea.value);
    console.log(saveas.value);

    const blob =new Blob([textarea.value],{type: saveas.value})
    // console.log(blob);

    const url=URL.createObjectURL(blob);
    const link=document.createElement("a"); // craeting a tag (anchor)
    link.download =filename.value; // creating download attribute and assigning a value of textarea input
    link.href=url;
    link.click() //clicking on the link so the filr canm downlaod
})