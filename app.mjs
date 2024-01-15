import createElem from "./createElem.mjs";
import diff from "./dff.mjs";

const random1 = (
  src = "https://media.giphy.com/media/QCwrk1jxSWzz4grp0x/giphy.gif"
) => {
  return {
    tag: "div",
    props: {
      children: {
        tag: "button",
        attrs: "button",
        props: {
          className: `button-blue`,
          children: {
            tag: "h1",
            attrs: "heading-1",
            props: {
              className: "im__a__heading",
              children: {
                tag: "img",
                attrs: `${src}`,
                props: {
                  children: "OK!",
                },
              },
            },
          },
        },
      },
    },
  };
};

const randomSrc = [
  "https://media.giphy.com/media/D2uvFDHxd5aJMB2ZnR/giphy.gif?cid=790b7611dayg3ike0zlxcz5vpkk9y2ax4q8widputaqstwvu&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3d0YXdrbTc2MWJ1eTU4NGh0cHBibjQ0Y21rczhyYjgybjQ4NXZ0dSZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/SZvPPppd779RpEE70d/giphy.gif",
  "https://media.giphy.com/media/6UAk2UiNKDBBQn5NUX/giphy.gif?cid=790b7611swtawkm761buy584htppbn44cmks8rb82n485vtu&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/5K7ngCtszoxxbaBieC/giphy.gif?cid=82a1493bsfufjeiil6kb7ocxbh0s7tskizeq40ge4ujvv44b&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
];

const oldNode = createElem(random1());

document.getElementById("app").appendChild(oldNode);

setInterval(() => {
  const randomVal = Math.floor(Math.random() * randomSrc.length - 1);
  const newNode = createElem(random1(randomSrc[randomVal]));
  diff(oldNode, newNode);
}, 1000);
