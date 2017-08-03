import React from 'react';
import { Divider, Button, Segment, Input, Menu, Icon, Label, Image } from 'semantic-ui-react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import FolderListItem from './FolderListItem.jsx';
import { today } from './utils/dateTimeHelper';
import { parseMessage } from './utils/messagesHelper';

class FolderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeItem: 'Folders',
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.filterMessages = this.filterMessages.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }
  
  filterMessages(labelId) {
    const { setFilteredMessages, setPage, setAreResults, setNewView, setCurrentFolder } = this.props;
    setNewView('Inbox');
    setPage(1);
    setCurrentFolder(labelId);
    axios.get('/api/folders/' + labelId)
      .then(response => {
        if (response.data.length > 0){
          setAreResults(true);
<<<<<<< HEAD
<<<<<<< HEAD
          setFilteredMessages(parseMessage(response.data, today));
=======
          setFilteredMessages(parseMessage(messages.data, today));
>>>>>>> date bug fix
=======
          setFilteredMessages(response.data);
>>>>>>> css styling for pages
        } else {
          console.log('No folder messages found');
          setNewView('Inbox');
          setAreResults(false);
        }
      });
  }
 
  render() {
    const { activeItem } = this.state || {};
    return (
      <div className='rightBar'>
        {this.props.folders.folders.length === 0 ? (
          <div></div>
        ) : (
          <div>
            <Divider hidden />
            <Image src='/assets/airplane.png'></Image>
            <Menu fluid vertical>
              {this.props.folders.folders.map((folder, key) => {
                return <FolderListItem as={Link} to='/' folder={folder} filter={this.filterMessages} key={key} />;
              })}
            </Menu>

          </div>
        )

        }
      </div>
    );
  }
}

export default FolderList;