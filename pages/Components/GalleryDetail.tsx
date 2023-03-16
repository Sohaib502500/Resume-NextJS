type GalleryDetailModal = {
  src: string;
  desc: string;
  onClose:()=>void;
};

export default function GalleryDetail(props: GalleryDetailModal) {
  return (
    <div className="z-10 mt-[-3rem] flex justify-center fixed w-full h-full bg-black bg-opacity-50">
      <div className="flex mt-20 flex-col w-[30rem] h-[30rem] bg-white border-b-2 shadow-lg shadow-black border-l-2 border-r-2 border-slate-100 shrink-0 p-2 rounded-b-xl">
        <img className="w-full h-[10rem] object-center object-contain" src={props.src}></img>
        <div className="p-2 mb-4 text-xs w-full h-[10rem] overflow-clip">
          {props.desc}
        </div>
        <button onClick={props.onClose} className="bg-blue-500 w-[6rem] h-[3rem] rounded-sm text-sm text-white font-bold justify-end mb-2">
          Close
        </button>
      </div>
    </div>
  );
}
