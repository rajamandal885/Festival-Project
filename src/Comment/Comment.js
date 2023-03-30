import './Comment.css'

function Comment(){
    return(
        <form>
        <div className="com-head" >Submit a Comment</div>
        <div className='com-note'>Your email address will not be published. Required fields are marked *</div>
   
        <div className="form-group">
          <textarea className="form-control" id="exampleFormControlTextarea1" cols="4" rows="8" maxLength="65525" placeholder='Comment'></textarea>
        </div>

        <div className="form-group">
          <input type="Name" className="com-form" maxLength="245" placeholder="Name"/>
          <input type="Email" className="com-form"  placeholder="Email"/>
          <input type="Website" className="com-form"  placeholder="Wedsite"/>
        </div>
        <button name='submut' type='submit' id='et_pb_submit' className="com-btn"> SUBMIT COMMENT </button>
        </form>
    )
}
export default Comment
