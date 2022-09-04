
import { useCalendarStore, useUiStore } from "../../hooks"


export const FabDelete = () => {


  const { startDeletingEvent, hasEventSelected } = useCalendarStore(); 

  return (
    <button
    className="btn btn-danger fab-danger"
    onClick={startDeletingEvent}
    style={{
      display: hasEventSelected ? '' : 'none'
    }}
    >
        <i className="fas fa-trash-alt"></i>
    </button>
  )
}
