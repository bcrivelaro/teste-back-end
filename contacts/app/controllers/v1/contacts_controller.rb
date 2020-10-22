class V1::ContactsController < ApplicationController
  def index
    @contacts = Contact.page(params[:page])

    paginate json: @contacts
  end

  def create
    @contact = Contact.new(contact_params)

    if @contact.valid?
      CreateContactWorker.perform_async(contact_params.to_unsafe_h)
      render json: {}, status: :accepted
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end


  private

  def contact_params
    params.require(:contact).permit(:email, :name)
  end
end