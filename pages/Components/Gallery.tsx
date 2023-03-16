
type GalleryModel = {
  onReadMore: (src:string,desc:string) => void;
};



export default function Gallery(props:GalleryModel) {
  
  const array_images = [
    {
      src: "https://media.licdn.com/dms/image/C4D2DAQG7Hf0Nf11qlw/profile-treasury-image-shrink_800_800/0/1622456525701?e=1679328000&v=beta&t=Qzd6KKXKMXbdP7m229rVntkpPa_lqi61_IO6SC4raoQ",
      desc: "SpireSignage",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      desc: "Weather Magic",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis voluptatum dolorem sed totam soluta omnis quo, atque, veritatis delectus repellendus molestias suscipit illo esse fuga fugiat minima provident cupiditate.",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div>
      <div className="font-extrabold text-6xl text-sky-600 w-full text-center mt-5">
        Experience
      </div>
      <div className="p-10 w-full mt-10 bg-white flex flex-wrap flex-shrink-0 gap-2 justify-start">
        {array_images.map((x, i) => Cell(x.src, x.desc,props))}
      </div>
    </div>
  );
}

function Cell(src: string, desc: string,props:GalleryModel) {
  return (
    <div className="flex flex-col w-[15rem] h-[20rem] bg-white border-b-2 shadow-lg shadow-black border-l-2 border-r-2 border-slate-100 shrink-0 p-2 rounded-b-xl">
      <img className="w-full h-[10rem]" src={src}></img>
      <div className="p-2 mb-4 text-xs w-full h-[10rem] overflow-clip">
        {desc}
      </div>
      <button onClick={(x)=>props.onReadMore(src,desc)} className="bg-blue-500 w-[6rem] h-[3rem] rounded-sm text-sm text-white font-bold justify-end mb-2">
        Read More
      </button>
    </div>
  );
}


