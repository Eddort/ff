import React, { Component } from 'react';
import './App.css';
import AdaptiveGridField from '../AdaptiveGridField';
import ButtonCollapse from '../ButtonCollapse';
import Content from '../Content';
import DragableWidgetButton from '../DragableWidgetButton';
import DragableWidgetText from '../DragableWidgetText';
import DragableWidgetImage from '../DragableWidgetImage';
import DragableWidgetCard from '../DragableWidgetCard';
import EmailField from '../EmailField';
import Grid from '../Grid';
import Header from '../Header';
import Footer from '../Footer';
import IconWidget from '../IconWidget';
import Label from '../Label';
import MenuItem from '../MenuItem';
import NumberField from '../NumberField';
import OnOffLabel from '../OnOffLabel';
import OnOffWidgetContacts from '../OnOffWidgetContacts';
import OnOffWidgetCopyright from '../OnOffWidgetCopyright';
import OnOffWidgetSocialNetwork from '../OnOffWidgetSocialNetwork';
import TextField from '../TextField';
import URLField from '../URLField';
import WidgetMenu from '../WidgetMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Grid>
            <OnOffLabel label="header"></OnOffLabel>
            <Grid>
              <OnOffWidgetContacts label="contacts"></OnOffWidgetContacts>
                <Grid>
                  <TextField label="name" placeholder="Введите значение"></TextField>
                  <NumberField label="phone" value="+7(900)123-45-87"></NumberField>
                  <OnOffLabel label="contact"></OnOffLabel>
                  <Grid>
                    <TextField label="country" placeholder="Введите значение"></TextField>
                    <TextField label="city" placeholder="Введите значение"></TextField>
                    <TextField label="street" placeholder="Введите значение"></TextField>
                    <TextField label="room" placeholder="Введите значение"></TextField>
                    <NumberField label="postal-code" placeholder="Введите значение"></NumberField>
                  </Grid>
                  <TextField label="skype" placeholder="Введите значение"></TextField>
                  <EmailField label="e-mail" placeholder="Введите значение"></EmailField>
                  <TextField label="company-name" placeholder="Введите значение"></TextField>
                </Grid>
              <OnOffWidgetSocialNetwork label="social-network"></OnOffWidgetSocialNetwork>
                <Grid>
                  <URLField label="facebook" placeholder="Введите значение" value="facebook.com/ukitcom"></URLField>
                  <URLField label="vk" placeholder="Введите значение" value=""></URLField>
                  <URLField label="twitter" placeholder="Введите значение" value=""></URLField>
                  <ButtonCollapse/>
                </Grid>
              <IconWidget label="icon" src="images/icon1.png"></IconWidget>
              <TextField label="title" placeholder="Введите значение"></TextField>
            <WidgetMenu label="menu"/>
              <Grid>
                <MenuItem label="Главная"></MenuItem>
                <MenuItem label="О Нас"></MenuItem>
                <MenuItem label="Услуги"></MenuItem>
                <MenuItem label="Портфолио"></MenuItem>
                <MenuItem label="Команда"></MenuItem>
              </Grid>
            </Grid>
          </Grid>
        </Header>


        <Content>
          <Grid>
            <Label label="content"/>
              <Grid>
                <Label label="block"/>
                  <Grid>
                    <AdaptiveGridField xs="12" sm="12" md="3"/>
                    <AdaptiveGridField xs="12" sm="12" md="6">
                      <Grid>
                        <DragableWidgetText label="text">
                          #### Студия дизайна 
                          ## Apartment 
                          Лучшие решения, актуальный дизайн, непревзойденное качество — все это  о нашей студии <ButtonCollapse/>
                        </DragableWidgetText>
                      </Grid>
                    </AdaptiveGridField>
                    <AdaptiveGridField xs="12" sm="12" md="6"/>
                  </Grid>

                <Label label="block"/>
                  <Grid>
                    <AdaptiveGridField xs="12" sm="12" md="1"/>
                    <AdaptiveGridField xs="12" sm="12" md="5">
                      <Grid>
                        <DragableWidgetImage label="image"/>
                      </Grid>
                    </AdaptiveGridField>
                    <AdaptiveGridField xs="12" sm="12" md="1"/>
                    <AdaptiveGridField xs="12" sm="12" md="5">
                      <Grid>
                        <DragableWidgetText label="text">
                          ## О Нас <ButtonCollapse/>
                        </DragableWidgetText>
                        <DragableWidgetButton label="button" value="Подробнее">Подробнее
                        </DragableWidgetButton>
                      </Grid>
                    </AdaptiveGridField>
                  </Grid>
                  {/* <Label label="block"/>
                  <Grid>
                    <DragableWidgetText label="text">
                      ## Услуги
                    </DragableWidgetText>
                    <DragableWidgetText label="text">
                      Чтобы сделать место, которое можно назвать «Домом» с больш
                    </DragableWidgetText>
                    <DragableWidgetImage label="image"/>
                    <DragableWidgetCard label="card">
                      <Grid>
                        <TextField label="name">Дизайн интерьера</TextField>
                        <TextField label="description">Дизайн интерьера является основной сферой деяте<ButtonCollapse/></TextField>
                      </Grid>
                    </DragableWidgetCard>
                    <DragableWidgetCard label="card">
                      <Grid>
                        <TextField label="name">Планировка</TextField>
                        <TextField label="description">Неудачная планировка не украсит даже самый лучш<ButtonCollapse/></TextField>
                      </Grid>
                    </DragableWidgetCard>
                    <DragableWidgetCard label="card">
                      <Grid>
                        <TextField label="name">Планировкasasas</TextField>
                        <TextField label="description">Неудачная планировка не украсит даже самый лучш<ButtonCollapse/></TextField>
                      </Grid>
                    </DragableWidgetCard>
                    <DragableWidgetCard label="card">
                      <Grid>
                        <TextField label="name">Дизайн мебели</TextField>
                        <TextField label="description">Уникальный предмет дизайна в вашем доме — что м<ButtonCollapse/></TextField>
                      </Grid>
                    </DragableWidgetCard>
                    <DragableWidgetButton label="button">Подробнее</DragableWidgetButton>
                  </Grid>
                <Label label="block"/>
                  <Grid>
                    <IconWidget label="icon"></IconWidget>
                    <DragableWidgetText label="text">
                      ### Кто сказал, что удовольствие не может быть функциональ<ButtonCollapse/>
                    </DragableWidgetText>
                  </Grid>
                <Label label="block"/>
                  <Grid>
                    <DragableWidgetText label="text">
                      ## Команда-лидеровмаркетинга
                    </DragableWidgetText>
                    <DragableWidgetText label="text">
                      В нашей студии работают настоящие профессионалы, которые и<ButtonCollapse/>
                    </DragableWidgetText>

                    <DragableWidgetImage label="image"/>
                    <DragableWidgetText label="text">
                      #### Марк Аврелов<ButtonCollapse/>
                    </DragableWidgetText>
                    <DragableWidgetImage label="image"/>
                    <DragableWidgetText label="text">
                      #### Мария Клюева<ButtonCollapse/>
                    </DragableWidgetText>
                    <DragableWidgetImage label="image"/>
                    <DragableWidgetText label="text">
                      #### Пётр Фомин<ButtonCollapse/>
                    </DragableWidgetText>
                    <DragableWidgetButton label="button">Подробнее</DragableWidgetButton>
                  </Grid>
                  <Label label="block"/>
                    <Grid>
                      <IconWidget label="icon"></IconWidget>
                      <DragableWidgetText label="text">
                        ### Удобство<ButtonCollapse/>
                      </DragableWidgetText>
                      <IconWidget label="icon"></IconWidget>
                      <DragableWidgetText label="text">
                        ### Красота<ButtonCollapse/>
                      </DragableWidgetText>
                      <IconWidget label="icon"></IconWidget>
                      <DragableWidgetText label="text">
                        ### Качество<ButtonCollapse/>
                      </DragableWidgetText>
                    </Grid>*/}
              </Grid> 
          </Grid>
        </Content>
        <Footer>
          <Grid>
          <OnOffLabel label="footer"></OnOffLabel>
            <Grid>
            <OnOffWidgetSocialNetwork label="social-network"></OnOffWidgetSocialNetwork>
                <Grid>
                  <URLField label="facebook" value="facebook.com/ukitcom" placeholder="Введите значение"></URLField>
                  <URLField label="vk" value="" placeholder="Введите значение"></URLField>
                  <URLField label="twitter" value="" placeholder="Введите значение"></URLField>
                  <ButtonCollapse/>
                </Grid>
            <OnOffWidgetCopyright label="copyright"/>
              <Grid>
                <TextField label="text" value="© uKit, 2018"/>
              </Grid>
            </Grid>
          </Grid>
        </Footer>
      </div>
    );
  }
}

export default App;
