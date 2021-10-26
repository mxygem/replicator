class UploadSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :title, :config, :file

  def file
    if object.file.attached?
      {
        url: rails_blob_url(object.file)
      }
    end
  end
end
