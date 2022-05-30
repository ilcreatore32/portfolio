const About = () => {
  return (
    <>
      <div className="item w-full p-4 border-indigo-900 border bg-slate-800 rounded-md">
        <div className="flex flex-col gap-3">
          <h1 className="font-medium leading-tight text-4xl my-2 text-white">
            Hi I'm Weishler Berman
          </h1>
          <div className="w-full px-2">
            <p className="text-slate-300 text-justify">
              <span className="text-white">Short description: </span>
              This is my portfolio
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
