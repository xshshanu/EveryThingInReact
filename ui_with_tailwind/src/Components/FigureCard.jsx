import React from "react";

function FigureCard({desc, name, profession }) {
  return (
    <>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://images.pexels.com/photos/3754270/pexels-photo-3754270.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg pt-8 font-medium">
              {desc}
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{name}</div>
            <div className="text-slate-700 pt-2 dark:text-slate-500">
              {profession}
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}

export default FigureCard;
