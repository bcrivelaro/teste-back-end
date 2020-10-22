class CreateContactWorker
  include Sidekiq::Worker

  def perform(params)
    Contact.create!(params)
  end
end