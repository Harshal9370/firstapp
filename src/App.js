
import './App.css';
import ButtonSection from './ButtonSection';



import ImageComponent from './ImageComponent';
// import New from './New';


import Youtube from './Youtube';

function App() {

  //  const harshCompt = [
  //   {
  //     link:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
  //      Name:"Harshal",
  //      Age:"22"
  //   },
  //   {

  //   }
  // ]
  // console.log(harshCompt);
  

  
  return (
    <>
      <Youtube></Youtube>
      <ButtonSection />
      <div style={{ display: "flex"}}>
        <div style={{width:"250px",height:"100px"}}>
          

        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <ImageComponent 
           Link="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
           Name="Taarak Mehta Ka Ooltah Chashmah: 3100 Happysodes And Counting"
           Group="Supda Shot M"
           Live="13.4M"
          />
          <ImageComponent 
           Link="https://www.india.com/wp-content/uploads/2020/07/taarak-mehta-ka-ooltah-chashmah-new-episodes-update-main.jpg"
           Name="Taarak Mehta Ka Ooltah Chashmah: 3100 Happysodes And Counting"
           Group="TarakhBhai"
           Live="30.9M"
          />
          <ImageComponent 
           Link="https://www.koimoi.com/wp-content/new-galleries/2021/11/taarak-mehta-ka-ooltah-chashmah-crosses-another-major-milestone-completes-3300-happysodes-001.jpg"
           Name="Taarak Mehta Ka Ooltah Chashmah Hits A New Milestone Of 3300 Episodes!"
           Group="TV Show"
           Live="20.4M"
          />
          <ImageComponent 
           Link="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
           Name="Boy Movie Hindi Dubbed|New South Movie|Amar Viswaraj"
           Group="Mosic M"
           Live="13.4M"
          />
          <ImageComponent 
           Link="https://www.india.com/wp-content/uploads/2020/07/taarak-mehta-ka-ooltah-chashmah-new-episodes-update-main.jpg"
           Name="Taarak Mehta Ka Ooltah Chashmah: 3100 Happysodes And Counting"
           Group="TarakhBhai"
           Live="30.9M"
          />
          <ImageComponent 
           Link="https://www.koimoi.com/wp-content/new-galleries/2021/11/taarak-mehta-ka-ooltah-chashmah-crosses-another-major-milestone-completes-3300-happysodes-001.jpg"
           Name="Taarak Mehta Ka Ooltah Chashmah Hits A New Milestone Of 3300 Episodes!"
           Group="TV Show"
           Live="20.4M"
          />
          <ImageComponent 
           Link="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
           Name="Boy Movie Hindi Dubbed|New South Movie|Amar Viswaraj"
           Group="Mosic M"
           Live="13.4M"
          />
          <ImageComponent 
           Link="https://www.india.com/wp-content/uploads/2020/07/taarak-mehta-ka-ooltah-chashmah-new-episodes-update-main.jpg"
           Name="Taarak Mehta Ka Ooltah Chashmah: 3100 Happysodes And Counting"
           Group="TarakhBhai"
           Live="30.9M"
          />
          <ImageComponent 
           Link="https://www.koimoi.com/wp-content/new-galleries/2021/11/taarak-mehta-ka-ooltah-chashmah-crosses-another-major-milestone-completes-3300-happysodes-001.jpg"
           Name="Taarak Mehta Ka Ooltah Chashmah Hits A New Milestone Of 3300 Episodes!"
           Group="TV Show"
           Live="20.4M"
          />
          
          
            
          
         
          {/* <New></New> */}
          
          
          

          
         
         

          
        </div>
      </div>

    </>
  );
}

export default App;
