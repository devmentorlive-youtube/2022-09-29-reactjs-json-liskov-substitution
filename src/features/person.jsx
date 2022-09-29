export default function Person() {
  const person = {
    name: "Mark Tellez",
    age: "Old as dirt",
    email: "mark@dontspam.me",
    photo:
      "https://marktellez.com/_next/image?url=%2Fmarktellez.png&w=3840&q=75",
  };

  return (
    <div className="mt-16 container mx-auto flex gap-4">
      <Person {...person} />
    </div>
  );
}

function Person({ name, age, photo, email }) {
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
      <img src={photo} className="w-[80px]" />
      <div>{email}</div>
    </div>
  );
}
