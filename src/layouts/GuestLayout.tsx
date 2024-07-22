import Header from "../components/navbar/Header";

export default function GuestLayout({ children }) {
  return (
    <div className="max-h-screen max-w-screen overflow-y-auto overflow-x-hidden">
      <Header></Header>
      <div className="bg-black/75 h-screen w-screen">
        <div className=" mx-auto">{children}</div>
      </div>
    </div>
  );
}
