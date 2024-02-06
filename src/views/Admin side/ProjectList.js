import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    Button,
    Modal, // Import Modal from reactstrap
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import nepaliFoodData from "./Data for Admin/Fooddata";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Projectlist = () => {
    const [modal, setModal] = useState(false);
    const [selectedDescription, setSelectedDescription] = useState("");


    const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const totalItems = nepaliFoodData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
    const toggleModal = () => setModal(!modal);

    const handleDescriptionClick = (description) => {
        setSelectedDescription(description);
        toggleModal();
    };
    const navigate = useNavigate();

    const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    
      const getPageItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return nepaliFoodData.slice(startIndex, endIndex);
      };


    

    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
                {/* Button */}
                <Row>
                    <div className="col ">
                        <Button
                            className="mb-5"
                            color="primary"  
                            onClick={()=> navigate('/admin/addfooditems')}
                            size="lg"
                        >
                            Add Food Items
                        </Button>
                    </div>
                </Row>

                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Food-Items</h3>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Code</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Availability</th>
                                        <th scope="col">Description</th>
                                        <th  >Options</th>
                                    </tr>
                                </thead>

                                {getPageItems().map((foods) => (

                                    <tbody>
                                        <tr>
                                            <td>{foods.id}</td>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            src={foods.imgLink}
                                                        />
                                                    </a>
                                                    <Media>
                                                        <span className="mb-0 text-sm">
                                                            {foods.name}
                                                        </span>
                                                    </Media>
                                                </Media>
                                            </th>

                                            <td>Rs. {foods.price}</td>

                                            <td>

                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className={!foods.availability ? "bg-warning" : "bg-success"} />
                                                    {foods.availability ? "Available" : "Not Available"}
                                                </Badge>




                                            </td>
                                            <td className="pr-0"
                                                onClick={() =>
                                                    handleDescriptionClick(foods.description)
                                                }
                                                style={{ cursor: "pointer", color: "" }}
                                            >
                                                {foods.description.split(" ").slice(0, 4).join(" ")} ......
                                            </td>


                                            <td className=" text-mid">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle
                                                        className="btn-icon-only text-light"
                                                        href="#pablo"
                                                        role="button"
                                                        size="sm"
                                                        color=""
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <i className="fas fa-ellipsis-v" />
                                                    </DropdownToggle>
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            View Details
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Edit
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Delete
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                    </tbody>

                                ))}

                            </Table>




                            {/* Pagination */}
                            <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className={currentPage === 1 ? "disabled" : ""}>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage - 1);
                        }}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    {[...Array(totalPages).keys()].map((page) => (
                      <PaginationItem
                        key={page + 1}
                        className={currentPage === page + 1 ? "active" : ""}
                      >
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(page + 1);
                          }}
                        >
                          {page + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem className={currentPage === totalPages ? "disabled" : ""}>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage + 1);
                        }}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>            
      
      {/* Modal for displaying full description */}
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Full Description</ModalHeader>
                <ModalBody>{selectedDescription}</ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleModal}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default Projectlist;
