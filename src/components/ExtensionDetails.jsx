import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";


function ExtensionDetails(props) {
    let navigate = useNavigate();
    let extensionDetails;

    const params = useParams();


    useEffect(() => {
        if (params.eid && props.extensionData) {
            extensionDetails = props.extensionData.filter(item => item.id == params.eid)
        } else {
            navigate('/');
        }

    }, [params.eid])



    return (
        <>
            {extensionDetails && extensionDetails.map((item) => (
                < div className="details py-10" key={'details' + item.id} >
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-10">
                        {item.title} - {item.description}
                    </h1>


                    <img src={item.image} className="rounded-lg mb-6" alt="workspace image" />

                    {item.content.map((contentItem) => (
                        <p className="text-base text-gray-700 mb-6">
                            {contentItem}
                        </p>
                    ))}
                </div >
            ))
            }
        </>
    );
}

export default ExtensionDetails;