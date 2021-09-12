import React from 'react';
import Header from '../appHeader/appHeader'
import InputList from '../inputList/inputList';
import Footer from '../footer/footer';
import '../../styles';

export default class App extends React.Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <InputList/>
                <Footer/>
            </div>
        )
    }
}