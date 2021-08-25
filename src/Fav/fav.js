import React from "react";
import { connect } from "react-redux";
import { Submit } from "./action";
const Fav = ({ data, Submit }) => {
  // const [state, setState] = useState(false);
  return (
    <div>
      <center>
        <i
          className={data ? "fas fa-heart" : "far fa-heart"}
          style={{ fontSize: 100, color: "red" }}
          onClick={Submit}
        ></i>
        <span>
          <h3>Favorite: {data ? 1 : 0}</h3>
        </span>
      </center>
    </div>
  );
};

const mapStateToProps = state => ({
  data: state
});
export default connect(mapStateToProps, { Submit })(Fav);
