import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="w-full bg-sky-500 min-h-[46rem] flex">
      <div className="w-[42rem] border-[2px] border-white rounded-3xl shadow-2xl mx-auto mt-10 mb-16">
        <div className="m-12 flex-col">
          <div className="left-0 text-white font-extrabold text-6xl mx-0 my-0 text-left mt-5">
            About Me
          </div>
          <div className="left-0 text-white text-[18px] font-normal mx-0 my-5 text-left">
            Hello, my name is Sohaib Basit and I am a software engineer with
            over 10 years of experience. I started my career back in 2011 and
            never looked back on programming.
          </div>
          <div className="left-0 text-white text-[18px] font-normal mx-0 my-5 text-left">
            Fast forward today, i have had the privilege of working with some of
            the best minds in the industry and have been able to build some
            amazing products. I have worked on Android Apps, iOS Apps,
            E-Commerce, SaaS products.
          </div>
          <div className="left-0 text-white text-[18px] font-normal mx-0 my-5 text-left">
            My recent experience was designing, building and leading a team to
            build a Digital Signage product from the ground up. The product is
            successfully deployed at a number of know universities. I also hired
            and trained a team of 4 technichians to maintain the product.
          </div>
          <div className="border-t-[1px] border-white flex-grow">
            <div className="mt-2 flex flex-wrap flex-shrink-0 gap-5 md:gap-2 justify-center">

              {getIcon(
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                "Typescript"
              )}
              {getIcon(
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                "Javascript"
              )}
              {getIcon(
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg",
                "Android"
              )}
              {getIcon(
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
                "iOS"
              )}
              {getIcon(
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
                "Swift"
              )}
              {getIcon(
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
                "Java"
              )}
              {getIcon(
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                "React"
              )}
              {getIcon(
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg",
                "Php"
              )}
              {getIcon(
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg",
                "Gradle"
              )}
              {getIcon(
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg",
                "Objective-C"
              )}
              {getIcon(
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
                "Mac Desktop"
              )}
              {getIcon(
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
                "Android Studios"
              )}
                {getIcon(
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                "Github"
              )}
                {getIcon(
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
                "Visual Studio"
              )}
                {getIcon(
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg",
                "XCode"
              )}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getIcon(icon: string, desc: string) {
  return (
    <div className="relative group bg-center flex-col content-center">
      <img className="h-7 w-7 mx-auto fill-white" src={icon} alt={desc}></img>
      <div className="text-white text-xs text-extralight mt-1">{desc}</div>
    </div>
  );
}
