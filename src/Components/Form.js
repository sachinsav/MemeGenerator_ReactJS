import React from 'react'
import '../memeStyle.css'

class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            topTxt : "",
            bottomTxt : "",
            imgUrl : "https://i.imgflip.com/1bij.jpg",
            allmeme : []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(event){
        const {name,value} = event.target
        this.setState({[name]:value});
    }
    handleClick(event){
        event.preventDefault()
        const ind = Math.floor(Math.random()* this.state.allmeme.length)
        this.setState({imgUrl:this.state.allmeme[ind].url})
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({allmeme:memes})
        })
    }
    render(){
        return(
            <div>
                <form>
                    <input type="text" name="topTxt" value={this.state.topTxt} 
                    onChange={this.handleChange} placeholder="Input Top Text Here"/>
                    <input type="text" name="bottomTxt" value={this.state.bottomTxt}
                    onChange={this.handleChange} placeholder="Input Bottom Text Here"/>
                    <button value="Next" onClick={this.handleClick}>Next</button>
                </form>
                <br />
                <div class="container">
                <img src={this.state.imgUrl}
                    id = "memeImg"
                />
                <h3 id="memTop" class="caption">{this.state.topTxt}</h3>
                <h3 id="membottom" class="caption">{this.state.bottomTxt}</h3></div>
            </div>
        );
    }
}

export default Form;