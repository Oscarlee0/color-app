import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const saveToClip = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Copied To Clipboard");
      } catch (error) {
        toast.error("Can not Copy");
      }
    } else {
      toast.error("Can not Copy");
    }
  };

  return (
    <article
      className={index > 9 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClip}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='percent-value'>#{hex}</p>
    </article>
  );
};

export default SingleColor;
