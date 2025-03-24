const Home = () => {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Velkommen til Historisk Nettside</h2>
        <p className="text-lg mb-6">Utforsk ulike historiske perioder og hendelser.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="/andreverdenskrig" className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300">Andre verdenskrig</a>
          <a href="/den-industrielle-revolusjon" className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300">Den industrielle revolusjon</a>
          <a href="/den-kalde-krigen" className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300">Den kalde krigen</a>
          <a href="/moderne-historie" className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300">Moderne historie</a>
        </div>
      </div>
    );
  };
  
  export default Home;
  