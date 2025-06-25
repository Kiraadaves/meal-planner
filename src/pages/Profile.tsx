import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const Profile = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray<HTMLDivElement>(".box");
      gsap.from(boxes, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });
    },
    { scope: container }
  );
  return (
    <>
      <h1>Welcome to Profile page</h1>
      <div ref={container}>
        <div className="row gap-3 p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className="box col-2 p-2 bg-primary-subtle border border-primary-subtle rounded-3"
            >
              Flex item {index + 1}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
