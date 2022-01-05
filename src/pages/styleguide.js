import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/app.scss'
import './styleguide.module.scss'
import { Container, Row, Col } from 'react-bootstrap';
import * as styles from './styleguide.module.scss'
import { Swatch } from '../components/swatch/swatch'
import { TextInput } from '../components/textInput/textInput'
import { Checkbox } from '../components/checkbox/checkbox'
import { CheckboxGroup } from '../components/checkboxGroup/checkboxGroup'
import { Select } from '../components/select/select'
import { Switch } from '../components/switch/switch'
import { SvrnButton } from '../components/svrnButton/svrnButton'
import { Search } from '../components/search/search'
import { Tooltip } from '../components/tooltip/tooltip'
import { Logo } from "../components/logo/logo"
import { Alert } from "../components/alert/alert"
import { Loader } from "../components/loader/loader"
import { Progress } from "../components/progress/progress"
import { Aside } from "../components/aside/aside"
import { Card } from "../components/card/card"
import { StaticImg } from "../components/staticImg/staticImg"
import { Video } from "../components/video/video"
import { CardList } from "../components/cardList/cardList"
import { Carousel } from "../components/carousel/carousel"
import { Header } from "../components/header/header"
import { Footer } from "../components/footer/footer"
import { Slider } from "../components/slider/slider"
import { Dialog } from "../components/dialog/dialog"


import { useState, useEffect } from "react";


export default function Styleguide() {
  const [page, setPage] = useState(null);
  const [showAlert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);


  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
            query: `
              query ($id: String!) {
                styleguide(id: $id) {
                  copyText
                }
              }
            `,
          variables: {
            id: "3OEF0HJoWoT9ByTISmVG65"
          },
        }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPage(data.styleguide);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  const rowStyle = {
    marginBottom: '40px'
  }

  const headerStyle = {
    marginBottom: '40px'
  }

  const cardArray = [
    {header: "Card 1", body: "This is some body text for number 1", link: '/#/1'},
    {header: "Card 2", body: "This is some body text for number 2", link: '/#/2'},
    {header: "Card 3", body: "This is some body text for number 3", link: '/#/3'},
    {header: "Card 4", body: "This is some body text for number 4", link: '/#/4'},
    {header: "Card 5", body: "This is some body text for number 5", link: '/#/5'},
    {header: "Card 6", body: "This is some body text for number 6", link: '/#/6'},
    {header: "Card 7", body: "This is some body text for number 7", link: '/#/7'},
    {header: "Card 8", body: "This is some body text for number 8", link: '/#/8'},
    {header: "Card 9", body: "This is some body text for number 9", link: '/#/9'}
  ]

  return (
    <Container>
      {showAlert &&
        <Alert type={alertType} text={alertMessage} hidden={false} showAlert={(idea) => setAlert(idea)} />
      }
      <Row>
        <Col>
          <h2 style={headerStyle}>Atoms</h2>
        </Col>
      </Row>
      <Row>
        <Col><h3>Colors</h3></Col>
      </Row>
      <Row><Col><hr  /></Col></Row>
      <Row style={rowStyle}>
        <Col><h4 className={styles.sectionTitle}>Primary colors</h4></Col>
        <Col><Swatch classNames={'bg-bright-purple white'} label="Bright Purple"><span>$bright-purple</span><br /><span>#BB80F7</span></Swatch></Col>
        <Col><Swatch classNames={'bg-light-purple white'} label="Light Purple"><span>$light-purple</span><br /><span>#A454F6</span></Swatch></Col>
        <Col><Swatch classNames={'bg-purple white'} label="Purple"><span>$purple</span><br /><span>#8F2BF5</span></Swatch></Col>
        <Col><Swatch classNames={'bg-dark-purple white'} label="Dark Purple"><span>$dark-purple</span><br /><span>#7E0DF1</span></Swatch></Col>
        <Col><Swatch classNames={'bg-deep-purple white'} label="Deep Purple"><span>$deep-purple</span><br /><span>#6404C7</span></Swatch></Col>
      </Row>
      <Row style={rowStyle}>
        <Col><h4 className={styles.sectionTitle}>Secondary colors</h4></Col>
        <Col><Swatch classNames={'bg-svn-orange gray-600'} label="Orange"><span>$svn-orange</span><br /><span>#FFCC1C</span></Swatch></Col>
        <Col><Swatch classNames={'bg-svn-green gray-600'} label="Green"><span>$svn-green</span><br /><span>#CBFE18</span></Swatch></Col>
        <Col />
        <Col />
        <Col />
      </Row>
      <Row style={rowStyle}>
        <Col><h4 className={styles.sectionTitle}>Grays</h4></Col>
        <Col><Swatch classNames={'bg-gray-700 white'} label="Gray 700"><span>$gray-700</span><br /><span>#343741</span></Swatch></Col>
        <Col><Swatch classNames={'bg-gray-600 white'} label="Gray 600"><span>$gray-600</span><br /><span>#5D5F67</span></Swatch></Col>
        <Col><Swatch classNames={'bg-gray-500 white'} label="Gray 500"><span>$gray-500</span><br /><span>#7D7F86</span></Swatch></Col>
        <Col><Swatch classNames={'bg-gray-400 gray-600'} label="Gray 400"><span>$gray-400</span><br /><span>#BEBFC2</span></Swatch></Col>
        <Col><Swatch classNames={'bg-gray-300 gray-600'} label="Gray 300"><span>$gray-300</span><br /><span>#DEDFE0</span></Swatch></Col>
      </Row>
      <Row style={rowStyle}>
        <Col />
        <Col><Swatch classNames={'bg-gray-200 gray-600'} label="Gray 200"><span>$gray-200</span><br /><span>#EFEFF0</span></Swatch></Col>
        <Col><Swatch classNames={'bg-gray-100 gray-600'} label="Gray 100"><span>$gray-100</span><br /><span>#F7F7F8</span></Swatch></Col>
        <Col />
        <Col />
        <Col />
      </Row>
      <Row style={rowStyle}>
        <Col><h4 className={styles.sectionTitle}>System</h4></Col>
        <Col><Swatch classNames={'bg-red white'} label="Red"><span>$red</span><br /><span>#D32F2F</span></Swatch></Col>
        <Col><Swatch classNames={'bg-light-red gray-600'} label="Light Red"><span>$light-red</span><br /><span>#FFF4F5</span></Swatch></Col>
        <Col><Swatch classNames={'bg-green white'} label="Green"><span>$green</span><br /><span>#008040</span></Swatch></Col>
        <Col><Swatch classNames={'bg-light-green gray-600'} label="Light Green"><span>$light-green</span><br /><span>#E1F2E6</span></Swatch></Col>
        <Col><Swatch classNames={'bg-yellow white'} label="Yellow"><span>$yellow</span><br /><span>#FFD000</span></Swatch></Col>
      </Row>
      <Row>
        <Col />
        <Col><Swatch classNames={'bg-light-yellow gray-600'} label="Light Yellow"><span>$light-yellow</span><br /><span>#FFF6CC</span></Swatch></Col>
        <Col />
        <Col />
        <Col />
        <Col />
      </Row>
      <Row>
        <Col><h3>Typography</h3></Col>
      </Row>
      <Row><Col><hr  /></Col></Row>
      <Row style={rowStyle}>
        <Col><h4 className={styles.sectionTitle}>H1</h4></Col>
        <Col lg="10">
          <Row>
            <Col>
              <h1>{page.copyText}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Knewave / 4.5em / 72px / #35393D</h4>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col><h4 className={styles.sectionTitle}>H2</h4></Col>
        <Col lg="10">
          <Row>
            <Col>
              <h2>{page.copyText}</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Oxygen / 3em / 48px / #35393D</h4>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col><h4 className={styles.sectionTitle}>H3</h4></Col>
        <Col lg="10">
          <Row>
            <Col>
              <h3>{page.copyText}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Oxygen Bold / 2.25em / 36px / #35393D</h4>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col><h4 className={styles.sectionTitle}>H4</h4></Col>
        <Col lg="10">
          <Row>
            <Col>
              <h4>{page.copyText}</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Oxygen Bold / 1.5em / 24px / #35393D</h4>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col><h4 className={styles.sectionTitle}>Body</h4></Col>
        <Col lg="10">
          <Row>
            <Col>
              <p>{page.copyText}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Oxygen / 1em / 16px / #35393D</h4>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col><h4 className={styles.sectionTitle}>Caption/<br />Disclaimer</h4></Col>
        <Col lg="10">
          <Row>
            <Col>
              <small>{page.copyText}</small>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Oxygen / .75em / 12px / #35393D</h4>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col><h4 className={styles.sectionTitle}>Link</h4></Col>
        <Col lg="10">
          <Row>
            <Col>
              <a href="./index">{page.copyText}</a>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Oxygen / 1em / 16px / #7E0DF1</h4>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col><h4 className={styles.sectionTitle}>Bold</h4></Col>
        <Col lg="10">
          <Row>
            <Col>
              <p><strong>{page.copyText}</strong></p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Oxygen Bold / 1em / 16px / #35393D</h4>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col><h4 className={styles.sectionTitle}>Placeholder</h4></Col>
        <Col lg="10">
          <Row>
            <Col lg="5">
              <input type="email" placeholder={page.copyText} />
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Oxygen / 1em / 16px / #727272</h4>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col><h3>Forms</h3></Col>
      </Row>
      <Row><Col><hr  /></Col></Row>
      <Row style={rowStyle}>
        <Col lg="6">
          <Row>
            <Col lg="4"><h4 className={styles.sectionTitle}>Input</h4></Col>
            <Col lg="8">
              <TextInput inputType="text" placeholder="email@address.com" label="My label" onChange={(value) => console.log(value)} />
            </Col>
          </Row>
        </Col>
        <Col lg="6">
          <Row>
            <Col lg="4"><h4 className={styles.sectionTitle}>Select</h4></Col>
            <Col lg="8">
              <Select options={[1, 2, 3, 4, 5]} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col lg="6">
          <Row>
            <Col lg="4"><h4 className={styles.sectionTitle}>Checkbox</h4></Col>
            <Col lg="8">
              <CheckboxGroup>
                <Checkbox type="checkbox" onChange={(value) => console.log(value)}>Option 1</Checkbox>
                <Checkbox type="checkbox" onChange={(value) => console.log(value)}>Option 2</Checkbox>
                <Checkbox type="checkbox" disabled={true}>Disabled checkbox</Checkbox>
              </CheckboxGroup>
            </Col>
          </Row>
        </Col>
        <Col lg="6">
          <Row>
            <Col lg="4"><h4 className={styles.sectionTitle}>Switch</h4></Col>
            <Col lg="8">
              <Switch />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col lg="6">
          <Row>
            <Col lg="4"><h4 className={styles.sectionTitle}>Radio</h4></Col>
            <Col lg="8">
            <Checkbox id={"firstDefault"} type="radio" onChange={(value) => console.log(value)} name="radioSet">Radio 1</Checkbox>
            <Checkbox id={"secondDefault"} type="radio" onChange={(value) => console.log(value)} name="radioSet">Radio 2</Checkbox>
            <Checkbox id={"secondDefault"} type="radio" onChange={(value) => console.log(value)} disabled={true} name="radioSet">Checkbox 2</Checkbox>
            </Col>
          </Row>
        </Col>
        <Col lg="6">
          <Row>
            <Col lg="4"><h4 className={styles.sectionTitle}>Buttons</h4></Col>
            <Col lg="8">
              <Row>
                <Col lg="4">
                  <SvrnButton size="small">Small</SvrnButton>
                </Col>
                <Col lg="4">
                  <SvrnButton inverse="inverse" size="small">Small</SvrnButton>
                 </Col>
              </Row>
              <br />
              <Row>
                <Col lg="4">
                  <SvrnButton>Medium</SvrnButton>
                </Col>
                <Col lg="2" />
                <Col lg="4">
                  <SvrnButton inverse="inverse">Medium</SvrnButton>
                 </Col>
              </Row>
              <br />
              <Row>
                <Col lg="4">
                  <SvrnButton size="large">Large</SvrnButton>
                </Col>
                <Col lg="4" />
                <Col lg="4">
                  <SvrnButton inverse="inverse" size="large">Large</SvrnButton>
                 </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col lg="6">
          <Row>
            <Col lg="4"><h4 className={styles.sectionTitle}>Slider</h4></Col>
            <Col lg="8">
              <Slider min={0} max={100} value={50} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col><h3>Page Elements</h3></Col>
      </Row>
      <Row><Col><hr  /></Col></Row>
      <Row style={rowStyle}>
        <Col lg="8">
          <Row>
            <Col lg="3"><h4 className={styles.sectionTitle}>Search</h4></Col>
            <Col lg="9">
              <Row>
                <Col>
                  <Row className={styles.searchBars}><Search /></Row>
                  <br />
                  <br />
                  <Row><Search inverse="inverse"/></Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg="4">
          <Row style={rowStyle}>
            <Col lg="2"><h4 className={styles.sectionTitle}>Tooltip</h4></Col>
            <Col lg="6">
              <Tooltip>This is tooltip text</Tooltip>
            </Col>
          </Row>
          <Row style={rowStyle}>
            <Col lg="2"><h4 className={styles.sectionTitle}>Logo</h4></Col>
            <Col lg="2">
              <Logo size="small" />
            </Col>
            <Col lg="2">
              <Logo />
            </Col>
            <Col lg="2">
              <Logo size="large" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col lg="12">
          <Row>
            <Col lg="2"><h4 className={styles.sectionTitle}>Divider</h4></Col>
            <Col lg="10"><hr /></Col>
          </Row>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col lg="12">
          <Row>
            <Col lg="2"><h4 className={styles.sectionTitle}>Alerts</h4></Col>
            <Col lg="1">
              <Row  style={rowStyle}>
                <Col lg="12">
                  <SvrnButton size="small" onClick={function(event){ setAlert(true); setAlertType('success'); setAlertMessage('Your action was successful.')}}>Success</SvrnButton>
                </Col>
              </Row>
              <Row style={rowStyle}>
                <Col lg="12">
                  <SvrnButton size="small" onClick={function(event){ setAlert(true); setAlertType('danger'); setAlertMessage("What you're doing is very bad.")}}>Danger</SvrnButton>
                </Col>
              </Row>
              <Row style={rowStyle}>
                <Col lg="12">
                  <SvrnButton size="small" onClick={function(event){ setAlert(true); setAlertType('warning'); setAlertMessage('This is a warning. Be careful!')}}>Warning</SvrnButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col lg="6">
          <Row>
            <Col lg="4"><h4 className={styles.sectionTitle}>Alert Dialog</h4></Col>
            <Col lg="2">
              <Dialog confirmText="I'm good!" launchText="Delete" heading="Item delete" inverse="primary">
                Are you sure you want to delete this?
              </Dialog>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 style={headerStyle}>Molecules</h2>
        </Col>
      </Row>
      <Row><Col><hr  /></Col></Row>
      <Row style={rowStyle}>
        <Col lg="6">
          <Row style={rowStyle}>
            <Col lg="4"><h4 className={styles.sectionTitle}>Loader</h4></Col>
            <Col lg="8">
              <Loader />
            </Col>
          </Row>
          <Row style={rowStyle}>
            <Col lg="4"><h4 className={styles.sectionTitle}>Progress Indicator</h4></Col>
            <Col lg="8">
              <Progress percentage={35} />
            </Col>
          </Row>
          <Row style={rowStyle}>
            <Col lg="4"><h4 className={styles.sectionTitle}>Aside</h4></Col>
            <Col lg="8">
              <Aside header="This is the header">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Aside>
            </Col>
          </Row>
        </Col>
        <Col lg="6">
          <Row style={rowStyle}>
            <Col lg="4"><h4 className={styles.sectionTitle}>Card</h4></Col>
            <Col lg="8">
              <Card header="Card title" link="../#">
                Here's some content.
              </Card>
            </Col>
          </Row>
          <Row style={rowStyle}>
            <Col lg="4"><h4 className={styles.sectionTitle}>Static Image</h4></Col>
            <Col lg="8">
              <StaticImg />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col lg="8">
          <Row>
            <Col lg="3"><h4 className={styles.sectionTitle}>Video</h4></Col>
            <Col lg="9">
              <Video url='https://libertymutual-15.wistia.com/medias/crs1ifibi0' />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 style={headerStyle}>Organisms</h2>
        </Col>
      </Row>
      <Row><Col><hr  /></Col></Row>
      <Row style={rowStyle}>
        <Col lg="12">
          <Row>
            <Col lg="2"><h4 className={styles.fullSectionTitle}>Card List</h4></Col>
          </Row>
          <Row>
            <CardList>
              {cardArray}
            </CardList>
          </Row>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col lg="12">
          <Row>
            <Col lg="2"><h4 className={styles.fullSectionTitle}>Carousel</h4></Col>
            <Col lg="4">
              <Carousel>
                {cardArray}
              </Carousel>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col lg="12">
          <Row>
            <Col lg="2"><h4 className={styles.fullSectionTitle}>Header</h4></Col>
          </Row>
          <Row>
            <Header inverse="inverse" />
          </Row>
          <Row style={rowStyle}>
          </Row>
          <Row>
            <Header inverse="primary" />
          </Row>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col lg="12">
          <Row>
            <Col lg="2"><h4 className={styles.fullSectionTitle}>Footer</h4></Col>
          </Row>
          <Row>
            <Footer />
          </Row>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
    </Container>
  )
}



/*
<Row>
  <Col lg="4"><h4 className={styles.sectionTitle}>Dialog</h4></Col>
  <Col lg="8">
    <Dialog confirmText="I accept!" launchText="Review" heading="Terms and conditions" inverse="primary">
      Skateboard mumblecore tote bag street art esse in non paleo brunch, quis sriracha. Hot chicken ut fam excepteur tofu squid snackwave migas in +1 gluten-free hexagon officia laboris. Wayfarers tote bag bespoke keffiyeh proident veniam forage. Est fam laboris actually live-edge. Velit subway tile proident, lyft glossier taxidermy eu.

      Vape est franzen, biodiesel chia mlkshk salvia polaroid heirloom qui glossier stumptown. Ad eiusmod commodo austin flannel sint. Fam sartorial master cleanse umami trust fund gluten-free ennui green juice pitchfork art party gochujang. Vaporware hot chicken offal do photo booth VHS lo-fi. Ennui shabby chic irony meggings actually flannel cliche ut minim echo park freegan cold-pressed marfa. Pabst pickled letterpress freegan fanny pack eiusmod next level kombucha. Letterpress kinfolk franzen gastropub.

      Skateboard humblebrag master cleanse literally cold-pressed godard gochujang pop-up. Biodiesel hell of pop-up aesthetic, deep v blog wayfarers brunch lumbersexual qui. Seitan enim nisi meditation. Cillum messenger bag ramps incididunt chia. Green juice fam asymmetrical culpa offal ennui. Ad retro adaptogen palo santo flannel activated charcoal sunt kinfolk copper mug la croix taxidermy reprehenderit. In umami ramps mumblecore selvage mixtape synth tumeric brunch.

      90's street art anim mollit. Godard +1 marfa scenester iPhone, esse YOLO. Quis actually chambray umami hexagon, est migas four loko selvage mumblecore helvetica dolore. Fingerstache ex direct trade quis tempor wolf aute ethical banjo duis seitan single-origin coffee. Ramps messenger bag art party pork belly pinterest. Gochujang chartreuse 90's flannel, vaporware minim knausgaard enim pop-up culpa incididunt. Id scenester mollit prism anim neutra glossier banh mi.

      Snackwave la croix sriracha meditation single-origin coffee lyft paleo ugh farm-to-table salvia excepteur. Biodiesel twee +1 tacos mumblecore culpa. Meh sustainable keytar mlkshk lumbersexual. Consequat iPhone semiotics bespoke lorem, tofu quis laborum af chartreuse trust fund.
    </Dialog>
  </Col>
</Row>
*/
