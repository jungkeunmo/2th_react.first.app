import React from "react"; //지금부터 나는 리엑트를 쓸거야

class GmButton extends React.Component {
    render() {
        return <button> 엄청난 디자인과 기능이 있는버튼 </button>;
    };
};

class AppShell extends React.Component {
    render() {
        return (
        <div>    
        <h1> HELLO REACT. MY FIRET APP!! </h1>;
        <GmButton />
        </div>
        );
    };
};

export default AppShell;
