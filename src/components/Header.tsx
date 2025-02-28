import RocketIcon from "./ui/RocketIcon";

const Header = () => {
  return (
    <header>
      <div className="h-[200px] bg-black">
        <div className="flex justify-center items-center h-full">
          <span className="mr-4"><RocketIcon /></span>
          <span className="text-primary font-black text-[40px]">Todo <span className="text-secondary font-black">App</span></span>
        </div>

      </div>
    </header>
  );
}

export default Header;