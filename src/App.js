import logo from './logo.svg';
import './App.css';
import Mailer from './mailer';
import Mail from './Mail';
import MessageForm from './Message/Message';
import AttendanceMarking from './Attendence/Attendence';

import NotificationForm from './NewNotification/Notification';
import MyForm from './Form';
import EmailForm from './Message/Message';
import FormValidationExample from './Password';
import Page1 from './Page1';
import Page2 from './Page2';
import Email from './PasswordRecovery/Forget';
import Forget from './PasswordRecovery/Forget';
import AppRouter from './pageco/AppRouter';
import NewPassword from './PasswordRecovery/NewPassword';
import OTP from './PasswordRecovery/OTP';
// import AppR from './PasswordRecovery/AppR';
function App() {
  return (
    <div className="App">
   {/* <Mailer/>
   <Mail/> */}
   <MessageForm/>
   <AttendanceMarking/>
 
   {/* <NotificationForm/> */}
   {/* <MyForm/> */}
   {/* <FormValidationExample/>
   <Page1/>
   <Page2/> */}
   {/* <Email/> */}
   {/* <EmailForm/> */}
   <Forget/>
   <NewPassword/>
   <OTP/>
   {/* <AppRouter /> */}
   {/* <AppR/> */}
    </div>
  );
}

export default App; 


