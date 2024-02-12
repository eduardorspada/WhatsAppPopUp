export class WhatsAppPopup {
    constructor(time, phone, messages, profilePicture) {
        this.time = time;
        this.phone = phone;
        this.messages = messages;
        this.profilePicture = profilePicture;
    }

    renderPopup(){
        const popup = document.createElement('div');
        popup.classList.add('whatsapp-popup');
        popup.innerHTML = `
            <div class="popup-header">
                <div class="popup-header-left">
                    <img src="${this.profilePicture}" alt="">
                </div>
                <div class="popup-header-right">
                    <h3>${this.phone}</h3>
                    <p>${this.time}</p>
                </div>
            </div>
            <div class="popup-body">
                ${this.messages}
            </div>
        `;
        return popup;
    }
}