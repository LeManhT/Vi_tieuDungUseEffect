import logo from './logo.svg';
import './App.css';
import HeaderWallet from './component/HeaderWallet';
import ListExpense from './component/ListExpense';
import { useState } from 'react';
import ModalExpense from './component/ModalExpense';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './component/SignIn';

function App() {

  const [expense, setExpense] = useState([
    { money: 100000, expense: false, note: 'Thu tiền', date: '2022-27-01' },
    { money: 10000, expense: true, note: 'Tiền ăn', date: '2022-21-01' },
    { money: 50000, expense: true, note: 'Tiền nhậu', date: '2022-21-01' }])



  function addData() {
    let money = document.querySelector('#money').value * 1;
    let note = document.querySelector('#note').value;
    let expenseData = JSON.parse(document.querySelector('#expense').value
    )
    let date = document.querySelector('#date').value;
    setExpense([...expense, { money: money, expense: expenseData, note: note, date: date }]);
    document.querySelector('.closeModal').click();
  }

  return (
    <div className="App">
      <div>
        <div className="wallet-container text-center">
          <p className="page-title"><i className="fa fa-align-left"></i>My E-wallet<i className="fa fa-user"></i></p>

          <div className="amount-box text-center">
            <img src="https://lh3.googleusercontent.com/ohLHGNvMvQjOcmRpL4rjS3YQlcpO0D_80jJpJ-QA7-fQln9p3n7BAnqu3mxQ6kI4Sw" alt="wallet" />
            <p>Total Balance</p>

            <div className="amount">
              <HeaderWallet expense={expense}></HeaderWallet>
            </div>
          </div>

          <div className="btn-group text-center">
            <ModalExpense addData={addData} expense={expense}></ModalExpense>
            <button type="button" className="btn btn-outline-light">Widthdraw</button>
          </div>



          <div className="txn-history">
            <div className='list-date'>

            </div>
            <p className='history-title'><b>History</b></p>
            <div className="item">
              <ListExpense expense={expense}></ListExpense>
            </div>


          </div>

          <div className="footer-menu">
            <div className="row text-center">
              <div className="col-md-3">
                <i className="fa fa-home"></i>
                <p>Home</p>
              </div>

              <div className="col-md-3">
                <i className="fa fa-inbox"></i>
                <p>Inbox</p>
              </div>

              <div className="col-md-3">
                <i className="fa fa-university"></i>
                <p>Bank</p>
              </div>

              <div className="col-md-3">
                <i className="fa fa-barcode"></i>
                <p>Scan</p>
              </div>
            </div>
          </div>
        </div>
      </div>







      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body ">
              <input type="text" id='money' placeholder='Money' />
              <input type="text" id='note' placeholder='Note' />
              <select name="" id="expense">
                <option value="" disabled>Expense</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
              <input type="date" id='date' placeholder='Date' />

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary closeModal" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary " onClick={addData}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
