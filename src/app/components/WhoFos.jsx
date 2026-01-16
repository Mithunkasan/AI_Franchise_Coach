"use client";
import RegisterButton from "./RegisterButton";


export default function JoinIf() {

const learn = [
  {
    number: "01.",
    content: "How To Build A Growth Business Rather Than A Survival Business."
  },
  {
    number: "02.",
    content: "Characteristics Of Growth And Survival Businesses."
  },
  {
    number: "03.",
    content: "3 Reasons Why Business Owners Get Stuck In Survival."
  },
  {
    number: "04.",
    content: "Focus Areas To Build aA Growth Business.",
    title:
      "Strategies Are Applicable To ALL Types Of Businesses, Regardless Of Industry Or Team Size."
  }
];



return (
  <>
    <div className="w-full bg-[#fffbf3] flex flex-col items-center px-4 sm:px-20 py-6 mb-20">
      <h1 className="font-bold text-black text-center px-4 py-6 text-lg sm:text-xl lg:text-2xl">
        Who This Workshop Will Help The Best?
      </h1>
      <img src="/dpng.png" alt="image" />

      <h1 className="font-bold text-black text-center px-4 py-6 text-2xl sm:text-3xl lg:text-4xl">
        What You Will Learn In 4 Hrs?
      </h1>
      <div
        style={{
          width: "80px",
          height: "3px",
          borderRadius: "1px",
          backgroundColor: "#ff7f6b",
          marginBottom: "25px",
        }}
      ></div>

      {/* Flex layout */}
      {/* Flex layout */}
<div className="flex flex-col lg:flex-row items-start gap-10 px-4 lg:px-20 py-6">
  {/* Left: Image */}
  <div className="flex-shrink-0 hidden lg:block">
    <img
      src="/man.webp"
      alt="image"
      className="w-[300px] sm:w-[350px] lg:w-[400px] h-auto rounded-lg"
    />
  </div>

  {/* Right: Learn Items */}
  <div className="flex-1 space-y-6">
    {learn.map((item, index) => (
      <div
        key={index}
        className="flex items-start gap-4 p-4 bg-white rounded-md shadow max-w-md"
      >
        <span className="font-extrabold text-orange-500 text-lg bg-[#ffedea] px-4 py-1 rounded-sm">
          {item.number}
        </span>

        <div>
          <p className="font-semibold text-gray-900">{item.content}</p>
          {item.title && (
            <p className="text-gray-600 mt-1">{item.title}</p>
          )}
        </div>
      </div>
    ))}
  </div>
</div>
 {/* End flex layout */}
    </div> {/* End outer container */}
  </>
);


}
