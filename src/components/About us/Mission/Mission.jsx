import Heading from "../../Shared/Heading Title/Heading";
import Container from "../../Shared/container/Container";


const Mission = () => {
    return (
        <Container>
            <div className="flex h-60 justify-center gap-10 mx-6">
            <div className="border p-2">
                <Heading title={'Our Mission'} ></Heading>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium officia tempora id? Quae magni, dicta deleniti qui delectus officia nobis blanditiis odit dolore distinctio repellendus iusto omnis velit earum natus.</h2>
            </div>
            <div className="border p-2">
                <Heading title={'Our Vision'}></Heading>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi, obcaecati fugit laboriosam voluptatem molestias mollitia vitae tempora voluptates dignissimos sequi adipisci enim tenetur cumque quaerat ipsum officiis a expedita!</h2>
            </div>
        </div>
        </Container>
    );
};

export default Mission;