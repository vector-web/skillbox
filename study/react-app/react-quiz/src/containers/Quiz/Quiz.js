import React, { Component } from 'react';
import classes from './Quiz.scss';
import ActiveQuiz from './../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from './../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {

  state = {
    results: {}, // { [id]: success error }
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // { [id]: 'success'  'error'}
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: 'Черное', id: 1},
          { text: 'Синее', id: 2},
          { text: 'Зеленое', id: 3},
          { text: 'Красное', id: 4}
        ]
      },
      {
        question: 'В каком году основали Санкт-Петербург?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          { text: '1700', id: 1},
          { text: '1702', id: 2},
          { text: '1703', id: 3},
          { text: '1803', id: 4}
        ]
      }
    ]
  }

  onAnswerClickHandler = (answerId) => {
    // console.log('Answer Id: ', answerId);

    // защита от повторного клика, после правильного ответа
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      // если ответ правильный, то не даем кликать
      if (this.state.answerState[key] === 'success'){
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if (question.rightAnswerId === answerId){

      if (!results[question.id]) {
        results[question.id] = 'success'
      }

      this.setState({
        answerState: { [answerId]: 'success' },
        results: results
      })

      const timeout = window.setTimeout(()=>{
        if (this.isQuizFinished()) {
          console.log('Finished');

          this.setState({
            isFinished: true
          })

        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout);
      }, 1000 )

    } else{

      results[question.id] = 'error'
      this.setState({
        answerState: { [answerId]: 'error' },
        results: results
      })

    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  goToHomePage = () => {
    this.props.history.push({
      pathname: '/'
    })
  }

  render(){

    console.log(this.props);

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          {
            this.state.isFinished 
            ? <FinishedQuiz
                results={this.state.results}
                quiz={this.state.quiz}
                onRetry={this.retryHandler}
              />
            : <ActiveQuiz 
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
          }
          <br/>
          <br/>
          <button onClick={this.goToHomePage}>На главную страницу</button>

        </div>
      </div>
    )
  }
}

export default Quiz