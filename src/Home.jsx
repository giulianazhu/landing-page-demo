import { MdOutlineDarkMode } from "react-icons/md";
import Box from "./Box";
import Container from "./Container";
import Form from "./Form";
import List from "./List";
import { useState } from "react";
import { IoSunny } from "react-icons/io5";

export default function Home() {
  const [mode, setMode] = useState(false);

  function handleMode() {
    let rootDoc = document.querySelector("#root");
    rootDoc.classList.toggle("darkmode");
    setMode((prevMode) => !prevMode);
  }

  return (
    <main>
      <div className="mode">
        {mode ? (
          <IoSunny size={50} onClick={() => handleMode()} />
        ) : (
          <MdOutlineDarkMode size={50} onClick={() => handleMode()} />
        )}
      </div>
      <section className="form-section">
        <Container flow="row">
          <div className="form-wrap">
            <h1>Open your bank account</h1>
            <span> Best way to manage you money</span>
            <Form />
          </div>
          <div className="img-wrap">
            <img src="phone_card.png" alt="by freepik" />
          </div>
        </Container>
      </section>

      {/* add carousel */}

      <section>
        <h2> What can you do with ### </h2>
      </section>

      <section>
        <h2>Pay for your daily expenses</h2>
        <Container>
          <Box type="primary" headline="Headline">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              quam totam aperiam eaque accusamus rem iste nemo cum atque vel
              dolorem tenetur voluptatibus, ea ullam. Repellendus fugit minima
              dignissimos molestiae!
            </p>
            <div className="img-wrap">
              <img src="greenblue_phonebank.png" alt="" />
            </div>
          </Box>
          <Box type="light" headline="Headline">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              unde magnam delectus distinctio similique totam ullam earum
              veritatis, tenetur explicabo aliquam. Necessitatibus totam odit ad
              ducimus quisquam reiciendis laboriosam architecto!
            </p>
            <div className="img-wrap">
              <img src="orange_phonebank.jpg" alt="" />
            </div>
          </Box>
          <Box type="contrast" headline="Headline">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis consectetur ullam laborum minima dicta hic, incidunt
              rerum error, eveniet aut explicabo tempore saepe. Obcaecati ipsam
              voluptatem atque rem maiores quia.
            </p>
            <div className="img-wrap">
              <img src="contrast_banking.png" alt="" />
            </div>
          </Box>
        </Container>
      </section>

      <section>
        <h2>Pay for your daily expenses</h2>
        <Container>
          <Box type="dark" headline="Headline">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis consectetur ullam laborum minima dicta hic, incidunt
              rerum error, eveniet aut explicabo tempore saepe. Obcaecati ipsam
              voluptatem atque rem maiores quia.
            </p>
            <div className="img-wrap">
              <img src="shopping.jpg" alt="" />
            </div>
          </Box>
          <Box type="dark" headline="Headline">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis consectetur ullam laborum minima dicta hic, incidunt
              rerum error, eveniet aut explicabo tempore saepe. Obcaecati ipsam
              voluptatem atque rem maiores quia.
            </p>
            <div className="img-wrap">
              <img src="customer.jpg" alt="" />
            </div>
          </Box>
        </Container>
      </section>

      <section>
        <h2>Pay for your daily expenses</h2>
        <Container flow="row">
          <Box type="dark" headline="Headline">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              officiis in ab eveniet facere velit fugiat possimus vitae officia.
            </p>
          </Box>
          <Box type="gray" headline="Headline">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              officiis in ab eveniet facere velit fugiat possimus vitae officia.
            </p>
          </Box>
          <Box type="light" headline="Headline">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              officiis in ab eveniet facere velit fugiat possimus vitae officia.
            </p>
          </Box>
          <Box type="contrast" headline="Headline">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              officiis in ab eveniet facere velit fugiat possimus vitae officia.
            </p>
          </Box>
        </Container>
      </section>

      <section>
        <h2>Pay for your daily expenses</h2>
        <Container>
          <Box type="light" headline="Headline">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis consectetur ullam laborum minima dicta hic, incidunt
              rerum error, eveniet aut explicabo tempore saepe. Obcaecati ipsam
              voluptatem atque rem maiores quia.
            </p>
            <div className="img-wrap">
              <img src="blue.png" alt="" />
            </div>
          </Box>

          <Box type="gray" headline="Headline">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis consectetur ullam laborum minima dicta hic, incidunt
              rerum error, eveniet aut explicabo tempore saepe. Obcaecati ipsam
              voluptatem atque rem maiores quia.
            </p>
            <div className="img-wrap">
              <img src="gold.png" alt="" />
            </div>
          </Box>
          <Box type="dark" headline="Headline">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis consectetur ullam laborum minima dicta hic, incidunt
              rerum error, eveniet aut explicabo tempore saepe. Obcaecati ipsam
              voluptatem atque rem maiores quia.
            </p>
            <div className="img-wrap">
              <img src="black.png" alt="" />
            </div>
          </Box>
        </Container>
      </section>
      <section className="final">
        <Container>
          <Box type="primary">
            <List />
          </Box>
        </Container>
      </section>
    </main>
  );
}
