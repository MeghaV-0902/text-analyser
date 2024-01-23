import React from 'react'

export default function Alerts(props) {
    const capitalize = (word)=>
    {
       const displayWord =  word.toLowerCase();
       return word.charAt(0).toUpperCase()+displayWord.slice(1)+" : "
    }
  return (
    props.alert && <div>
      <div className={`alert alert-${props.alert.alertType} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.alertType)}</strong>{props.alert.alertMsg}
</div>
    </div>
  )
}
