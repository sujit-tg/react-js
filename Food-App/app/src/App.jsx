import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import SearchResult from './components/SearchResult';
export const BASE_URL = "http://localhost:9000";

const App = () => {

  const [data,setData]=useState(null);
  const [loading, setLoading]=useState(false);
  const [error, setError]=useState(null)
  const [filteredData, setfilteredData]=useState(null);
  const [selectedBtn , setSelectedBtn] = useState("all")

  useEffect(() => {
    const fetchFoodData =  async ()=>{
      setLoading(true);
      try {
        const response = await fetch(BASE_URL)
        const json = await response.json();
        console.log(json);
  
        
        setData(json);
        setfilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data")
      }
    };

    fetchFoodData();
  }, []);

  console.log(data);
  const searchFood = (e)=> 
  {
    const searchValue=e.target.value;

    console.log(searchValue);
    if(searchValue=== ""){
      setfilteredData(null)
    }
    const filter = data?.filter((food)=> food.name.toLowerCase().includes(searchValue.toLowerCase()));
      setfilteredData(filter)
    
  }

  const filterFood=(type)=>{
    if(type==="all"){
      setfilteredData(data);
      setSelectedBtn("all")
      return;
    }

    const filter = data?.filter((food)=> food.type.toLowerCase().includes(type.toLowerCase()));
    setfilteredData(filter)
    setSelectedBtn(type)
  }

  const filterBtns=[
    {
      name:"All",type:"all"
    },
    {
      name:"Breakfast",type:"breakfast"
    },
    {
      name:"Lunch",type:"lunch"
    },
    {
      name:"Dinner",type:"dinner"
    },


  ]

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <>
    <Container>
      <TopContainer>
        <div className='logo'>
          <img src='./app-logo.png' alt='logo-image'/>
        </div>
        <div className="search">
          <input onChange={searchFood}placeholder='Search food'/>
        </div>
      </TopContainer>
      <Filtercontainer>
        {
          filterBtns.map((value)=> (
            <Button
            isSelected={selectedBtn=== value.type}
            key={value.name}onClick={()=>filterFood(value.type)}>{value.name}</Button>
          ))
        }
        </Filtercontainer>
        
    </Container>
    <SearchResult data={filteredData}/>
    </>
  )
}

export default App
export const Container = styled.div`
max-width: 1200px ;
margin: 0 auto;
`;
const TopContainer = styled.section`
min-height: 140px;
display: flex;
justify-content: space-between;
padding: 16px;
align-items: center;

  .search{
    input{
      background-color: grey;
      border: 1px solid #dfd3c3;
      border-radius:5px;
      height: 30px;
      font-size: 16px;
      padding: 0 10px;
      color: white;
      &::placeholder{
        color: white; 
      }
    }
  }
  @media (0 < width < 768px){
    flex-direction: column;
    height: 60px;
    margin-bottom: 10px;
  }
`;

const Filtercontainer =styled.section`
display: flex;
justify-content: center;
gap: 12px;
padding: 20px;

`;
export const Button =styled.button`
background: ${({isSelected})=>(isSelected ? "#f22f2f" : "#ff4343")}; 
outline: 1px solid ${({isSelected})=>(isSelected ? "white" : "#ff4343")}; 
border-radius: 5px;
padding: 6px 12px;
border: none;
color: white;
cursor: pointer;
&:hover {
  background-color: #f22f2f;
}
`;

