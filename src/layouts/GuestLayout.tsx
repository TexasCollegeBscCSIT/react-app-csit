import Header from "../components/navbar/Header";


export default function GuestLayout({ children }) {
  return (
    <div className="max-h-screen max-w-screen overflow-hidden">
      <Header></Header>
      <div className="bg-slate-300 h-screen w-screen">
      <div className="container mx-auto">
        {children}
      </div>
      </div>
    </div>
  );
}
