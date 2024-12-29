import logo from './logo.jpg';
import './App.css';

function App() {
return(
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>State Bank Of India</h1>
        
        <h2 className="a">About Us</h2>
        <p>State Bank of India (SBI) a Fortune 500 company, is an Indian Multinational, Public Sector Banking 
            qand Financial services statutory body headquartered in Mumbai. The rich heritage and legacy of over
             200 years, accredits SBI as the most trusted Bank by Indians through generations.
             We are the largest banking and financial services organization in India, with an asset base of over
              Rs. 61 trillion. We serve over 50 crore customers through our vast network of over 22,500 branches,
               63,580 ATMs/ADWMs, 82,900 BC outlets, with an undeterred focus on innovation, and customer centricity,
                which stems from the core values of the Bank - Service, Transparency, Ethics, Politeness and Sustainability.
                The Bank has successfully diversified businesses through its various subsidiaries i.e SBI General Insurance
            , SBI Life Insurance, SBI Mutual Fund, SBI Card, etc. It has spread its presence globally and operates across
                 time zones through 241 offices in 29 foreign countries.</p>
        
        <h2 className="a">SBI Saving Account</h2>  
        <p>Saving account is one of the most vital financial products offered by all Indian banks. This account allows accountholders to keep your fund and earn an interest rate.</p>        
        <h2 className='a'>Characteristics Of SBI Savings Account</h2>
        <p>The following are the prominent features-</p>
        
        <ul>
            <li>SBI savings accounts have no minimum account balance. In other words, no minimum account balance is required in such savings accounts.</li>
            <li>State Bank of India SBI offers a nomination opportunity for their savings bank account. Also applicable to the Motor Accidents Claim Account.</li>
            <li>SBI provides ATM cards for all of its savings accounts except the Resident Foreign Currency (Domestic) Account.</li>
            <li>The maximum account balance for savings accounts with SBI varies depending on the kind of savings account. Furthermore, with the exception of the small savings account and the kids' account, there is no maximum balance in an SBI savings account.</li>
        </ul>
       
        <table border={1}>
                <tr>
                <th colSpan={2}className='b' align='center' >SBI Basic Savings Bank Account</th>
                </tr>
                <tr>
                    <td className='b1'>Bank</td>
                    <td className='b1'>Sate Bank of India</td>
                </tr>
                <tr>
                    <td>Category</td>
                    <td>SBI Basic Savings Account</td>
                </tr>
                <tr>
                    <td className='b1'>Minimum Balance Amount</td>
                    <td className='b1'>NIL</td>
                </tr>
                <tr>
                    <td>Interest Rate</td>
                    <td>4%</td>
                </tr>
                <tr>
                    <td className='b1'>Debit Card Offered</td>
                    <td className='b1'>Basic ATM-Debit Card </td>
                </tr>
                <tr>
                    <td>Eligibility Criteria</td>
                    <td>Individuals who are 18 years old and above.</td>
                </tr>
                
        </table>

        <h2 className='a'>Key Benefits of SBI Savings Account:</h2>
        <p>The following are the key benefits of SBI savings account: </p>

        <ul>
            <li>Internet Banking,Mobile Banking, Kiosk Banking</li>
            <li>Transfer accounts to any SBI Branch without changing the account number</li>
            <li>Passbook issued free of charge</li>
            <li>Multicity cheques</li>
            <li>Safe Deposit lockers</li>
            <li>Nomination facility</li>
            <li>Personal Accident Insurance available at a nominal premium</li>
            <li>No inter core charges for transfer transactions</li>
            <li>Multiple variants of ATM/Debit Cards like Gold Card, International ATM/Debit Card, etc.</li>
            <li>Can be linked to Multi Option Deposit (MOD) Account</li>
        </ul>
        <div className='container'>
            <h2 className='a1'>SBI Loans</h2>
            <p>Personal Loan |
                  Home Loan |
                  Gold Loan |
                  Eduaction Loan |
                  Car Loan
            </p>
            <br></br>
            <a className='c' href="https://retail.onlinesbi.sbi/retail/newuserreg.htm" target="_blank"  rel="noopener noreferrer">
          Click to User SBI Registration Form
          </a>
                
        </div>
     </div>

);
}

export default App;
