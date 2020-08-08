import styled from 'styled-components';  

export const CardWraper = styled('div')`
    width:100%;
    height:100%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardContainer= styled('div')`
    border-radius: 15px;   
    width: 75%;
    height: 95%;
`


export const CardHeader = styled('div')`
    width: 100%;
    height: 33.6%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color:#fff;
    text-align: center;

    &>.title{
        font-weight: bold;
        font-size: 2.2em;
        width: 100%;
        height: 40%;
        padding-top: 10%;
        text-align: center;
        font-weight: 700;
    }

    &>.description{
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1em;
        width: 100%;
        height: 60%;
        text-align: center;
    }
`


export const ProjectImg = styled('div')`
    z-index: 999;
    width: 100%;
    height: 43%;
    &>img{
        position: absolute;
        top:34,5%;
        height: 40.85%;
        left:0;
    }
`


export const CardTechnologies = styled('div')`
    width: 100%;
    height: 23.4%;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    font-size: 1rem;

    &>.technology{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 70%;

        &>.technology-img{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 70%;
        }

        &>.technology-name{
            padding-top: 5%;
            height: 30%;
            font-size: 1em;
        }

    }
`
