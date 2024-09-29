import Avatar from "@/components/Avatar";
import image from "../assets/images/woman.jpg";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-2 mb-4">
      <p>default</p>
      <Avatar img={image} />

      <p>Square</p>
      <Avatar img={image} square />

      <p>Border</p>
      <Avatar img={image} border />

      <p>Square Border</p>
      <Avatar img={image} border square />

      <p>Initials</p>
      <Avatar initials="CS" />

      <p>Icon</p>
      <Avatar />

      <p>Dot</p>
      <Avatar img={image} dot />
    </div>
  );
}
