import HomePageStyle from "./HomePage.module.css";

function HomePage() {
    console.log(HomePageStyle);
  return (
    <h1 className={HomePageStyle.HomePage}>
      <p>Wecome To Influencer Management Portal</p>
    </h1>
  );
}

export default HomePage;
