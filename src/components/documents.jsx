import React from "react";
import Nav from "./nav";
import SearchListings from "./searchListings";
import { EditButton, DeleteButton } from "./buttonListings";
import Pagination from "./paginations";
import Edit from "../assets/img/Edit.svg";
import EditHover from "../assets/img/EditHover.svg";
import Delete from "../assets/img/delete.svg";
import DeleteIconHover from "../assets/img/deleteIconHover.svg";
import AddDocuments from "./AddDocuments";

const Documents = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div className="d-flex w-100 mb-3">
          <div className="container tenantsContainer">
            <div className="d-flex align-items-center justify-content-start">
              <h2 className="tenantsText">Documents</h2>
              <div className="form-check ms-3 mb-1"></div>
            </div>
          </div>
          <div className="container-fluid ListingContainer d-flex justify-content-end bttonContainer">
            <SearchListings />
            <AddDocuments />
          </div>
        </div>
        <div className="container-fluid">
          <div className="ListingContainer">
            <div className="listingsContainer">
              <table className="table table-responsive-lg">
                <thead>
                  <tr>
                    <td>
                      <p className="NAME1 td p1">NAME</p>
                    </td>
                    <td>
                      <p className="location td p1">LOCATION</p>
                    </td>
                    <td>
                      <p className="lotSize td p1">LOT SIZE</p>
                    </td>
                    <td>
                      <p className="houseSize td p1">HOUSE SIZE</p>
                    </td>
                    <td>
                      <p className="price td p1">PRICE</p>
                    </td>
                    <td></td>
                    <td>
                      <p className="public td p1">PUBLIC</p>
                    </td>
                    <td>
                      <p className="actions td p1">ACTIONS</p>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="trBg">
                    <td className="imgId">
                      <p></p>
                    </td>
                    <td className="h p1 td td2">
                      <p></p>
                    </td>
                    <td className="h p1 td td2">
                      <p></p>
                    </td>
                    <td className="h p1 td td2">
                      <p></p>
                    </td>
                    <td className="h p1 td td2">
                      <p></p>
                    </td>
                    <td className="h p1 td td2"></td>

                    <td>
                      <EditButton
                        defaultImage={<img src={Edit} alt="Edit" />}
                        hoverImage={<img src={EditHover} alt="EditHover" />}
                      />
                      <DeleteButton
                        className="delete"
                        defaultImage={<img src={Delete} alt="Delete" />}
                        hoverImage={
                          <img src={DeleteIconHover} alt="DeleteIconHover" />
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Pagination
     
      />
    </>
  );
};

export default Documents;
