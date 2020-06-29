import React from 'react'
import './css/style.css'
import Nav from './components/Nav'
import HomePage from './components/home/Page'
import MathFactsPage from './components/mathFacts/Page'
import NumberInfoPage from './components/numberInfo/Page'
import SearchNumberPage from './components/numberInfo/SearchNumberPage'
import YearFactsPage from './components/yearFacts/Page'
import TriviaFactsPage from './components/triviaFacts/Page'
import DateFactsPage from './components/dateFacts/DateFactsPage'
import MonthlyFactsPage from './components/dateFacts/MonthlyFactsPage'
import DayFactsPage from './components/dateFacts/DayFactsPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScrollToTop from 'react-router-scroll-top'
import SearchDatePage from './components/dateFacts/SearchDatePage'
import NumberFactsListPage from './components/NumberFactsListPage'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Nav />
      <ScrollToTop>
        <Switch>
          <Route path='/date-facts' exact component={SearchDatePage} />
          <Route path='/date-facts/:month' exact component={MonthlyFactsPage} />
          <Route path='/date-facts/day/:day' exact component={DayFactsPage} />
          <Route path='/date-facts/:month/:day' component={DateFactsPage} />
          <Route path='/math-facts' exact component={MathFactsPage} />
          <Route path='/math-facts/:number' component={NumberFactsListPage} />
          <Route path='/year-facts' exact component={YearFactsPage} />
          <Route path='/year-facts/:number' component={NumberFactsListPage} />
          <Route path='/trivia-facts' exact component={TriviaFactsPage} />
          <Route path='/trivia-facts/:number' component={NumberFactsListPage} />
          <Route path='/number-info' exact component={SearchNumberPage} />
          <Route path='/number-info/:number' exact component={NumberInfoPage} />
          <Route path='/' exact component={HomePage} />
        </Switch>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;
