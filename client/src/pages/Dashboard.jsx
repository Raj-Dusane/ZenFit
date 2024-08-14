import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import { counts } from '../utils/data';
import CountsCard from '../components/cards/CountsCard';
import WeeklyStatsCard from '../components/cards/WeeklyStatsCard';
import CategoryChart from '../components/cards/CategoryChart';
import AddWorkouts from '../components/cards/AddWorkouts';
import WorkoutCard from '../components/cards/WorkoutCard.jsx';
import { addWorkout, getDashboardDetails, getWorkouts } from "../api/index.js";

const Container = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 22px 0px;
    overflow-y: scroll;
`;

const Wrapper = styled.div`
    flex: 1;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    gap: 22px;
    @media (max-width: 600px) {
    gap: 12px;
    }
`;

const Title = styled.div`
    padding: 0px 16px;
    font-size: 22px;
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
`;

const FlexWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 22px;
    padding: 0px 16px;
    @media (max-width: 600px) {
    gap: 12px;
    }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Dashboard = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  const [workout, setWorkout] = useState(`#Legs
  -Back Squat
  -5 setsx15 reps
  -30 kg
  -10 min`);

  const dashboardData = async () => {
    setLoading(true);
    const token = localStorage.getItem("ZenFit-app-token");
    await getDashboardDetails(token).then((res) => {
      setData(res.data);
      console.log(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    dashboardData();
  }, []);

  const addNewWorkout = async (workout, setWorkout, addNewWorkout, buttonLoading) => {
    setButtonLoading(true);
    const token = localStorage.getItem("ZenFit-app-token");
    await addWorkout(token, {workoutString: workout}).then((res) => {
      dashboardData();
      setButtonLoading(false);
    }).catch((err) => {
      alert(err)
    });
  };

  return (  
    <Container>
        <Wrapper>
            <Title>Dashboard</Title>
            <FlexWrap>
                {counts.map((item)=> { return <CountsCard item={item} data={data}/>})
                }
            </FlexWrap>

            <FlexWrap>
                <WeeklyStatsCard data={data}/>
                <CategoryChart data={data} />
                <AddWorkouts 
                  workout={workout} 
                  setWorkout={setWorkout} 
                  addNewWorkout={addNewWorkout}
                  setButtonLoading={buttonLoading}
                />
            </FlexWrap>

            <Section>
              <Title>Todays Workouts</Title>
              <CardWrapper>
                {todaysWorkouts.map((workout) => (
                  <WorkoutCard workout={workout} />
                ))}
              </CardWrapper>
            </Section>
        </Wrapper>
    </Container>
  )
}

export default Dashboard;