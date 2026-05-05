import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Github, Linkedin, Mail, MapPin, Send, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly Mail = Mail;
  readonly MapPin = MapPin;
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Send = Send;

  private readonly web3FormsAccessKey = '57ae02b3-d587-47da-b7ba-c857ccfcdff1';
  private readonly web3FormsEndpoint = 'https://api.web3forms.com/submit';

  isSubmitting = signal(false);
  submitSuccess = signal('');
  submitError = signal('');

  contactInfo = [
    {
      label: 'Email',
      value: 'ahmedidlbi@hotmail.com',
      href: 'mailto:ahmedidlbi@hotmail.com',
      icon: Mail,
    },
    {
      label: 'Location',
      value: 'Kuwait',
      href: '',
      icon: MapPin,
    },
    {
      label: 'GitHub',
      value: 'github.com/AhmadAlidlbi',
      href: 'https://github.com/AhmadAlidlbi',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/ahmadalidlbi',
      href: 'https://www.linkedin.com/in/ahmadalidlbi',
      icon: Linkedin,
    },
  ];

  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  async onSubmit(contactForm: NgForm): Promise<void> {
    if (contactForm.invalid || this.isSubmitting()) {
      return;
    }

    this.isSubmitting.set(true);
    this.submitSuccess.set('');
    this.submitError.set('');

    const payload = {
      access_key: this.web3FormsAccessKey,
      name: this.formData.name,
      email: this.formData.email,
      subject: this.formData.subject,
      message: this.formData.message,
      from_name: 'Ahmad Alidlbi Portfolio',
    };

    try {
      const response = await fetch(this.web3FormsEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Message could not be sent.');
      }

      this.submitSuccess.set('Message sent successfully. Thank you for reaching out.');
      contactForm.resetForm();

      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: '',
      };
    } catch (error) {
      console.error('Web3Forms submit error:', error);
      this.submitError.set('Something went wrong. Please try again later.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
