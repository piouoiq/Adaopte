export default function App() {
  return (
    <>
      <section className=" relative overflow-hidden text-center text-primary-color py-40 font-family-heading">
        <div className=" relative z-50 ">
          <h1 className="text-6xl pb-12">
            Donnons-leurs autant qu'ils nous apportent
          </h1>
          <p>
            Chaque jour, des milliers d'animaux attendent une famille aimante.
            Trouvez votre <br />
            compagnon idéal parmi nos animaux disponibles à l'adoption.
          </p>
        </div>
        <img
          src="../public/images/background.jpg"
          className=" w-full h-full object-cover object-center brightness-80  absolute top-0"
        ></img>
      </section>
    </>
  );
}
