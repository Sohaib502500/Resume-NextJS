"use client";
import React, { useState } from "react";
import "./Resume.css";

import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Gallery from "./Gallery";
import GalleryDetail from "./GalleryDetail";

type ProjectsModel ={
  src:string;
  desc:string;
}

export default function Resume() {
  const [isDetail, setIsDetail] = React.useState<boolean>(false);
  const [dataModel, setDataModel] = React.useState<ProjectsModel>({src:"",desc:""});
  let src:string = "";
  let desc:string = "";

  function onReadMore(src1:string, desc1:string) {
    console.log("onRead More clicked.. desc="+desc);
    let x:ProjectsModel = {src:src1,desc:desc1}
    setDataModel(x);
    setIsDetail(true);
  }
  function onClose(){
    console.log("close");
    setIsDetail(false)
  }

  return (
    <div className="border-x-transparent bg-white w-full min-h-screen mx-0 my-0 pt-12">
      {isDetail==true ? <GalleryDetail src={dataModel?.src} desc={dataModel?.desc} onClose={onClose}></GalleryDetail>:null}
      <Introduction></Introduction>
      <AboutMe></AboutMe>
      <Gallery onReadMore={onReadMore}></Gallery>
      
     
    </div>
  );
}


