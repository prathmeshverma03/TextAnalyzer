import React from "react";

export default function Alert(props) {
  return (
    <div style={{height : '50px'} } className={`bg-${props.arr[0]} mt-1 py-0`}>
    {props.alertText && <div class="my-0 alert alert-success alert-dismissible fade show" role="alert">
     {props.alertText}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
</div>
  );
}
