var app = {
  // Application Constructor
  initialize: function () {
    //  document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  onDeviceReady: function () {
    //     this.receivedEvent('deviceready');
  },

  // Update DOM on a Received Event
  receivedEvent: function (id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    //     listeningElement.setAttribute('style', 'display:none;');
    //  receivedElement.setAttribute('style', 'display:block;');

    //   console.log('Received Event: ' + id);
  }
};

app.initialize();

var editor;
var modalshow = false;
$(document).ready(function () {

  hljs.configure({ // optionally configure hljs
    languages: ['javascript', 'htmlbars', 'css', 'python', 'xml', 'cs', 'php']
  });

  var Font = Quill.import('formats/font');
  // We do not add Sans Serif since it is the default
  Font.whitelist = ['inconsolata', 'roboto', 'mirza', 'arial'];
  Quill.register(Font, true);

  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike', 'image'],
    ['blockquote', 'code-block'],
    [{
      'header': 1
    }, {
      'header': 2
    }],
    [{
      'list': 'ordered'
    }, {
      'list': 'bullet'
    }],
    [{
      'script': 'sub'
    }, {
      'script': 'super'
    }],
    [{
      'indent': '-1'
    }, {
      'indent': '+1'
    }],
    [{
      'direction': 'rtl'
    }],
    [{
      'size': ['small', false, 'large', 'huge']
    }],
    ['link', 'image', 'video', 'formula'],
    [{
      'color': []
    }, {
      'background': []
    }],
    [{
      'font': []
    }],
    [{
      'align': []
    }]
  ];
  var options = {

    modules: {
      history: {
        delay: 2000,
        maxStack: 500,
        userOnly: true
      },
      formula: true,
      syntax: true,
      toolbar: {
        container: '#toolbar',
        handlers: {
          image: imageHandler
        }
      },
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'
  };
  editor = new Quill('#editor', options);

  function imageHandler() {
    var range = this.quill.getSelection();
    var value = prompt('What is the image URL');
    this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
  }
  $("#undo").click(function () {
    editor.history.undo();
  });

  $("#redo").click(function () {
    editor.history.redo();
  });

  $("#clear").click(function () {
    presentAlert();
  });


  function gethtml() //display current HTML
  {
    var html = editor.root.innerHTML;
    return html;
  }


  async function presentAlert() {
    const alertController = document.querySelector('ion-alert-controller');
    await alertController.componentOnReady();

    const alert = await alertController.create({
      header: 'Warning',
      subHeader: '',
      message: 'Are you sure to clear all ?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          // console.log('Confirm Cancel')
        }
      }, {
        text: 'Ok',
        handler: () => {
          editor.setContents([]);
        }
      }]
    });
    return await alert.present();
  }


  $("#fileInput").css('opacity', '0');

  $("#openfolder").click(function (e) {
    e.preventDefault();
    $("#fileInput").trigger('click');
  });

  $("#save").click(function (e) {
    presentModal();
    setTimeout(function (){$('ion-segment-button[value="code"]').attr('checked', true)}, 100);
  });


  var fileInput = document.getElementById('fileInput');


  fileInput.addEventListener('change', function (e) {
    var file = fileInput.files[0];

    var textType = /text.*/;


    var reader = new FileReader();

    reader.onload = function (e) {
      editor.setContents([]);
      editor.root.innerHTML = reader.result;
      console.log(reader.result);
    }

    reader.readAsText(file);

  });

});

async function presentAlert2() {
  const alertController = document.querySelector('ion-alert-controller');
  await alertController.componentOnReady();

  const alert = await alertController.create({
    header: 'Warning',
    subHeader: '',
    message: 'Are you sure to clear all ?',
    buttons: [{
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {

      }
    }, {
      text: 'Ok',
      handler: () => {
        editor.setContents([]);
      }
    }]
  });
  return await alert.present();
}

async function presentActionSheet() {
  const actionSheetController = document.querySelector('ion-action-sheet-controller');
  await actionSheetController.componentOnReady();

  const actionSheet = await actionSheetController.create({
    header: "Action",
    buttons: [{
      text: 'Clear All',
      icon: 'trash',
      handler: () => {
        presentAlert2();
      }
    }, {
      text: 'Preview',
      icon: 'eye',
      handler: () => {
        presentModal();
        setTimeout(function (){$('ion-segment-button[value="preview"]').attr('checked', true)}, 100);

      }
    }, {
      text: 'View HTML Code',
      icon: 'code',
      handler: () => {
        presentModal();
        setTimeout(function (){$('ion-segment-button[value="code"]').attr('checked', true)}, 100);
      }
    }, {
      text: 'View Markdown Code',
      icon: 'code',
      handler: () => {
        presentModal();
        setTimeout(function (){$('ion-segment-button[value="mdcode"]').attr('checked', true)}, 100);
      }
    }, {
      text: 'Snowy Editor V1.0 By Chu Tsun Him',
      icon: 'information-circle',
    },{
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();
}

async function copyalert() {
  if($('.alert-wrapper').is(":visible")==false){
  const alertController = document.querySelector('ion-alert-controller');
  await alertController.componentOnReady();

  const alert = await alertController.create({
    header: 'Copy As...',
    cssClass: 'copyhtml',
    buttons: [ {
      text: 'HTML Code',
      handler: () => {
      }
    },
    {
      text: 'Markdown',
      cssClass: 'copymd',
      handler: () => {
      }
    }
  ]
  });
  return await alert.present();
}
}


async function alert(text) {
  const alertController = document.querySelector('ion-alert-controller');
  await alertController.componentOnReady();

  const alert = await alertController.create({
    header: 'Info',
    message: text,
    buttons: [{
      text: 'Ok',
      handler: () => {
      }
    }]
  });
  return await alert.present();
}

async function toast(msg) {
  const toastController = document.querySelector('ion-toast-controller');
  await toastController.componentOnReady();

  const toast = await toastController.create({
    message: msg,
    showCloseButton: true,
    position: 'bottom',
    closeButtonText: 'Done'
  });
  return await toast.present();
}



async function presentModal() {
  // initialize controller
  const modalController = document.querySelector('ion-modal-controller');
  await modalController.componentOnReady();

  // create component to open
  const element = document.createElement('div');
  element.innerHTML = `
  <ion-toolbar color="light">
<ion-buttons slot="start">
<ion-button color="dark">
<ion-icon name="arrow-round-back"></ion-icon>
</ion-button>
</ion-buttons>
    <ion-title style="text-align: center;  font-size:28px;  
  font-weight: 300;  font-family: 'Cookie', cursive;     margin-left: -62px;">Snowy</ion-title>
  </ion-toolbar>

  <ion-toolbar color="light">
  <ion-segment>
 <ion-segment-button value="preview" checked="true">
     Preview
 </ion-segment-button>
 <ion-segment-button value="code" checked="false">
  HTML Code
 </ion-segment-button>
 <ion-segment-button value="mdcode" checked="false">
 Markdown Code
</ion-segment-button>
</ion-segment>
</ion-toolbar>

   <ion-content scroll-y="true"> 
   <ion-toast-controller></ion-toast-controller>
<div style="overflow: auto!important;" id="segmentcontent" padding></div>
<ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button mini color="dark" id="copyfab">
          <ion-icon name="copy"></ion-icon>
        </ion-fab-button>
      </ion-fab>
   </ion-content>
  `;

  // listen for close event
  const button = element.querySelector('ion-button');
  button.addEventListener('click', () => {
    modalController.dismiss();
    modalshow = false;
  });



  // present the modal
  const modalElement = await modalController.create({
    component: element
  });
  modalElement.present();
  modalshow = true;


  //Clipboard and click Method after present
  var clipboard = new ClipboardJS('.copyhtml', {
    text: function () {
      return editor.root.innerHTML;
    }
  });

  clipboard.on('success', function (e) {
  //  if($('.alert-wrapper').is(":visible")==false){
   // alert('Copied to clipboard!');
   toast('Copied to clipboard!');
   // }
    console.log(e); e.clearSelection();
  });

  clipboard.on('error', function (e) {
 
      toast('Error cannot copy to clipboard!');
  });

  var clipboard2 = new ClipboardJS('.copymd', {
    text: function () {
      return new TurndownService().turndown(editor.root.innerHTML);
    }
  });

  clipboard2.on('success', function (e) {
 //   if($('.alert-wrapper').is(":visible")==false){
  //  alert('Copied to clipboard!');
  toast('Copied to clipboard!');
   // }
    e.clearSelection();
  });

  clipboard2.on('error', function (e) {
      toast('Error cannot copy to clipboard!');
  });


  $( "#copyfab" ).click(function() {
    copyalert();
  });
  

  const segments = document.querySelectorAll('ion-segment');

  for (let i = 0; i < segments.length; i++) {
    segments[i].addEventListener('ionChange', (ev) => {
      console.log('Segment changed', ev.detail.value)


      var result = tidy_html5(editor.root.innerHTML, {
        "tidy-mark": false
      });

      var codeview = `<div id="perview">` + result + `</div>`

      if (ev.detail.value == "code") {

        $('#segmentcontent').html(codeview);
        var flask = new CodeFlask('#perview', {
          language: 'html',
          lineNumbers: false
        });
        $(".codeflask__textarea").prop("disabled", true);


      } else if (ev.detail.value == "save") {
        var save = `
        
        `;
        $('#segmentcontent').html(save);

      } else if (ev.detail.value == "mdcode") {

        $('#segmentcontent').html('<textarea id="md"  style="border: none"></textarea>');
        $('#md').val(''+new TurndownService().turndown(editor.root.innerHTML));
        autosize($('#md'));
      }else {
        $('#segmentcontent').html('<div style="overflow: auto!important;">' + editor.root.innerHTML + '</div>');
      }
    })
  }

}
