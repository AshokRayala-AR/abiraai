import TechRowData  from './TechRowData'

// Use TechRowData as needed

export default function TechRow() {
  return (
    <div>
      <div className="hidden  lg:flex gap-14 py-3 px-2 justify-center items-center">
        {TechRowData.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-2 font-bold items-center justify-center">
              <img src={item.imgpath} alt="imgpath" />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}